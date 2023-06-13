import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>©️2023 Ekulista, All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.socialIcon}
          alt="Nasir on FB"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.socialIcon}
          alt="Nasir on Insta"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.socialIcon}
          alt="Nasir on Twiter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.socialIcon}
          alt="Nasir on YT"
        />
      </div>
    </div>
  );
};

export default Footer;
