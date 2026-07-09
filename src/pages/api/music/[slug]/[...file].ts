export const prerender = false;

type Env = {
  MUSIC: R2Bucket;
};

export async function GET({ params, locals }: any) {
  const slug = params.slug;
  const file = params.file;

  if (!slug || !file) {
    return new Response("Missing song or file", { status: 400 });
  }

  const filePath = Array.isArray(file) ? file.join("/") : file;

  const key = `music/${slug}/${filePath}`;

  const env = locals.runtime?.env as Env;

  if (!env?.MUSIC) {
    return new Response("R2 binding MUSIC not available", { status: 500 });
  }

  const object = await env.MUSIC.get(key);

  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  const headers = new Headers();

  if (key.endsWith(".m3u8")) {
    headers.set("Content-Type", "application/vnd.apple.mpegurl");
  } else if (key.endsWith(".ts")) {
    headers.set("Content-Type", "video/mp2t");
  } else if (key.endsWith(".aac")) {
    headers.set("Content-Type", "audio/aac");
  } else {
    headers.set("Content-Type", "application/octet-stream");
  }

  headers.set("Cache-Control", "private, max-age=60");

  return new Response(object.body, {
    headers,
  });
}