import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.link}>
        HOME
      </Link>
      <Link href="/about" className={styles.link}>
        ABOUT
      </Link>
      <Link href="/blog" className={styles.link}>
        BLOG
      </Link>
    </header>
  );
}
