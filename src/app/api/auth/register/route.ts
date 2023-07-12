import User from "@/models/user.model";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    if (err instanceof Error) {
      return new NextResponse(err.message, {
        status: 500,
      });
    } else {
      return new NextResponse("Unexpected error", {
        status: 500,
      });
    }
  }
};