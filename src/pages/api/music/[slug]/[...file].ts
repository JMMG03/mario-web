export const prerender = false;

import { env } from "cloudflare:workers";

type Env = {
  MUSIC: R2Bucket;
};

function getContentType(key: string) {
  if (key.endsWith(".m3u8")) return "application/vnd.apple.mpegurl";
  if (key.endsWith(".ts")) return "video/mp2t";
  if (key.endsWith(".aac")) return "audio/aac";
  if (key.endsWith(".mp3")) return "audio/mpeg";
  return "application/octet-stream";
}

export async function GET({ params }: any) {
  try {
    const slug = params.slug;
    const file = params.file;

    if (!slug || !file) {
      return new Response("Missing song or file", { status: 400 });
    }

    const filePath = Array.isArray(file) ? file.join("/") : file;
    const key = `music/${slug}/${filePath}`;

    const { MUSIC } = env as unknown as Env;

    if (!MUSIC) {
      return new Response("R2 binding MUSIC not available", { status: 500 });
    }

    const object = await MUSIC.get(key);

    if (!object) {
      return new Response(`Not found in R2: ${key}`, { status: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", getContentType(key));
    headers.set("Cache-Control", "private, max-age=60");

    return new Response(object.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    return new Response(
      `Internal error: ${error instanceof Error ? error.message : String(error)}`,
      { status: 500 }
    );
  }
}