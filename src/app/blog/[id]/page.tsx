import { Metadata } from "next";
import React from "react";

interface IPost {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: IPost): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}
async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export default async function Post({ params: { id } }: IPost) {
  const post = await getData(id);

  return (
    <div>
      <h1 style={{ marginTop: 50, marginBottom: 10 }}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}
