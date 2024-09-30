import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchPosts } from "@/utils/api";
import PostsPage from "@/components/PostsPage";
import initTranslations from "@/app/i18n";

type PostsParamas = {
  params: {
    locale: string;
  };
};

// server component
export default async function Posts({ params: { locale } }: PostsParamas) {
  const { t } = await initTranslations(locale, ["home"]);
  // create a query client
  const queryClient = new QueryClient();

  // prefetch the posts
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // dehydrate the query client
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsPage title={t("posts")} home={t("home")} locale={locale} />
    </HydrationBoundary>
  );
}
