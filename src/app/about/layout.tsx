import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "ABOUT | NEXT TEST",
};

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1> About us</h1>
      <ul>
        <li>
          <Link href="/about/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
