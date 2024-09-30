import Link from "next/link";
import styles from "./page.module.scss";
import { Post as PostType } from "@/utils/types/post";
import initTranslations from "@/app/i18n";

type PostProps = {
  params: {
    locale: string;
    id: string[];
  };
};

const fetchPosts = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data: PostType = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function Post({ params }: PostProps) {
  // get the id from the url
  const { id, locale } = params;
  const { t } = await initTranslations(locale, ["home"]);

  // fetch the post
  const posts = await Promise.all(
    id.map(async (postId) => await fetchPosts(postId))
  );

  // render the post
  return (
    <div className={styles.page}>
      {posts.map((post) => (
        <div key={post?.id} className={styles.post}>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p className={styles.postBody}>{post?.body}</p>
        </div>
      ))}

      <Link href={`/${locale}/posts`}>{t("home:posts")}</Link>
    </div>
  );
}
