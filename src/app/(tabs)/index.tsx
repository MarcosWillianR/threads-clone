import { FlatList } from "react-native";
import { dummyPosts } from "@/dummyData";
import { PostListItem } from "@/components/PostListItem";

export default function App() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostListItem data={item} />}
    />
  );
}
