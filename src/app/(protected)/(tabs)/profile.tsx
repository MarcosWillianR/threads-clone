import { Pressable, Text, View } from "react-native";
import { supabase } from "@/lib/supabase";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        className="bg-white p-4 rounded-lg"
        onPress={() => supabase.auth.signOut()}
      >
        <Text>Sign out</Text>
      </Pressable>
    </View>
  );
}
