import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "BLOG | NEXT TEST",
};

async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) throw new Error("Error fetching");
  return response.json();
}

export default async function Blog() {
  const posts = await getData();
  return (
    <div>
      <h1 style={{ marginTop: 50, marginBottom: 20 }}>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
