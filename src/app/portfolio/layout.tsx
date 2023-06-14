import React, { PropsWithChildren } from "react";
import styles from "./page.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
