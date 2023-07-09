import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { blogs } from "./data";
import Link from "next/link";
import { Blog } from "@/models/blog.model";
import { Metadata } from "next";

type Props = {};

async function getData(): Promise<Blog[]> {
  const res = await fetch("http://localhost:3000/api/blog", {
    // Through error if we do not use cache option
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Blogs - Ekulista",
  description: "Blogs are different categories",
};

const Blog = async ({}: Props) => {
  const blogs = await getData();
  return (
    <div className={styles.mainContainer}>
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog._id}`}
          className={styles.container}
          key={blog._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={blog.blogImgUrl}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
