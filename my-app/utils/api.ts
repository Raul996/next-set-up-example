import { Post } from "./types/post";

// function that fetches posts
export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
