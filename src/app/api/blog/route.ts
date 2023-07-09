import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blog, { Blog as Post } from "@/models/blog.model";

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
