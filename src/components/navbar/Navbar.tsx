"use client";
import { LinkType } from "@/types/common.type";
import Link from "next/link";
import React from "react";

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
    <nav>
      <Link href={"/"}>Ekulista</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <button onClick={() => console.log("logged out")}>Logout</button>
    </nav>
  );
};

export default Navbar;
