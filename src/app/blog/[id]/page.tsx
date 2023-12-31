import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Blog } from "@/models/blog.model";
import { blogs } from "../data";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string): Promise<Blog> {
  const res = await fetch(`http://localhost:8080/api/blog/${id}`, {
    // Through error if we do not use cache option
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const res = await fetch(`http://localhost:8080/api/blog/${id}`, {
    // Through error if we do not use cache option
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "No Blog Found",
    };
  }

  const blog = await res.json();
  return {
    title: blog.title,
  };
}

const BlogPost = async ({ params: { id } }: Props) => {
  const data = await getData(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.author}>
            <Image
              src={data.authorImgUrl}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.authorName}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.blogImgUrl}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
