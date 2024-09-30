"use client";

import { fetchPosts } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styles from "./page.module.scss";

type PostsPageProps = {
  title: string;
  home: string;
  locale: string;
};

export default function PostsPage({ title, home, locale }: PostsPageProps) {
  const data = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  const posts = data?.data || [];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Link href={`/${locale}`}>{home}</Link>
    </div>
  );
}
