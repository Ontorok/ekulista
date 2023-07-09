"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR, { Fetcher } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Dashboard = ({}: Props) => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
