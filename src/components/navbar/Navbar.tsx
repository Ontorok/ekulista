"use client";
import { LinkType } from "@/types/common.type";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Button from "../button/Button";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

type Props = {};

const links: LinkType[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Ekulista
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <Button text="Logout" url="/portfolio" />
      </div>
    </div>
  );
};

export default Navbar;
