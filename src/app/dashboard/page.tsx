"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR, { Fetcher } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Blog } from "@/models/blog.model";
import Image from "next/image";

type Props = {};
const fetcher: Fetcher<Blog[], string> = (url) => fetch(url).then((res) => res.json());

const Dashboard = ({}: Props) => {
  const session = useSession();
  const router = useRouter();
  const { data, error, isLoading, mutate } = useSWR("http://localhost:8080/api/blog", fetcher);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    console.log(target);

    const title = (target[0] as HTMLInputElement).value;
    const description = (target[1] as HTMLInputElement).value;
    const blogImgUrl = (target[2] as HTMLInputElement).value;
    const content = (target[3] as HTMLInputElement).value;
    const authorImgUrl = "https://randomuser.me/api/portraits/med/men/75.jpg";
    const authorName = "John Doe";

    const blog: Blog = {
      title,
      description,
      blogImgUrl,
      content,
      authorImgUrl,
      authorName,
    };

    console.log({ blog });

    try {
      await fetch("http://localhost:8080/api/blog", {
        method: "POST",
        body: JSON.stringify(blog),
      });
      mutate();
      // e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? "loading"
          : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.blogImgUrl} alt="" width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                {/* <span className={styles.delete} onClick={() => handleDelete(post._id)}>
                  X
                </span> */}
              </div>
            ))}
      </div>

      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea placeholder="Content" className={styles.textArea} cols={30} rows={10}></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
