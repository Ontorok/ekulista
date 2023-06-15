"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import useThemeContext from "@/hooks/useThemeContext";

type Props = {};

const DarkModeToggle = (props: Props) => {
  const { mode, toggle } = useThemeContext();
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        onClick={toggle}
      />
    </div>
  );
};

export default DarkModeToggle;
