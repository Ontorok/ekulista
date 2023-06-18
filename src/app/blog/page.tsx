import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { blogs } from "./data";
import Link from "next/link";

type Props = {};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async ({}: Props) => {
  const blogs = await getData();
  return (
    <div className={styles.mainContainer}>
      {blogs.map((blog: any) => (
        <Link
          href={`/blog/${blog.id}`}
          className={styles.container}
          key={blog.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://images.pexels.com/photos/5429261/pexels-photo-5429261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
