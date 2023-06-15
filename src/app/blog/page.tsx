import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { blogs } from "./data";
import Link from "next/link";

type Props = {};

const Blog = ({}: Props) => {
  return (
    <div className={styles.mainContainer}>
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog.id}`}
          className={styles.container}
          key={blog.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={blog.imgageUrl}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
