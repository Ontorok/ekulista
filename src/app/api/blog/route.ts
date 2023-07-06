import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog.model";

export const GET = async (request: any) => {
  // Fetch
  try {
    await connect();
    const blogs = await Blog.find();
    // TODO: Fix this types
    return new NextResponse(blogs, { status: 200 });
  } catch (err: any) {
    return new NextResponse("Database Error!!", { status: 500 });
  }
};
