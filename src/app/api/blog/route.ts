import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog.model";

export const GET = async (request: Request) => {
  // Fetch
  try {
    await connect();
    const blogs = await Blog.find();
    // TODO: Fix this types
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err: any) {
    return new NextResponse("Database Error!!", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const newPost = new Blog(body);

  console.log(newPost);

  try {
    await connect();

    const test = await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    if (err instanceof Error) {
      return new NextResponse(err.message, { status: 500 });
    }
  }
};
