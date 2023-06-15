import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Blog } from "@/models/blog.model";
import { blogs } from "../data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const getData = (id: string): Blog => {
  const blog = blogs.find((b) => b.id === parseInt(id));

  return blog ? blog : notFound();
};

const BlogPost = ({ params: { id } }: Props) => {
  const data = getData(id);
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
