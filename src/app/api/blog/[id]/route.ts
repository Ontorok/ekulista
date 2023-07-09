import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/blog.model";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  // Fetch
  try {
    await connect();
    const id = params.id;
    const blog = await Blog.findById(id);
    // TODO: Fix this types
    return new NextResponse(JSON.stringify(blog), { status: 200 });
  } catch (err: any) {
    return new NextResponse("Database Error!!", { status: 500 });
  }
};
