import { NextResponse } from "next/server";

export async function GET() {
  const posts = await fetch("https://nailed-it.tech/api/posts").then((res) =>
    res.json()
  );

  return NextResponse.json(posts);
}
