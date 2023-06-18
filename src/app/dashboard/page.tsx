"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR, { Fetcher } from "swr";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {};
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const fetcher: Fetcher<Post[], string> = (url) =>
  fetch(url).then((res) => res.json());

const Dashboard = ({}: Props) => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // Decide what to render
  let content;
  if (isLoading) {
    content = "Loading....";
  }

  if (!isLoading && data) {
    content = (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title.split(" ")[0]}</li>
        ))}
      </ul>
    );
  }
  return <div className={styles.container}>{content}</div>;
};

export default Dashboard;
