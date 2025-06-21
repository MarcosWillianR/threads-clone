import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { PostListItem } from "@/components/PostListItem";
import { Link } from "expo-router";
import { supabase } from "@/lib/supabase";
import { Post } from "@/types";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, user:profiles(*)");
      if (error) {
        console.error("Error fetching posts:", error);
        return;
      }
      setPosts(data as Post[]);
    };
    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem data={item} />}
      ListHeaderComponent={() => (
        <Link href="new" className="text-blue-500 p-4 text-center text-3xl">
          New Post
        </Link>
      )}
    />
  );
}
