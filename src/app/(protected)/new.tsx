import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";

export default function New() {
  const { user } = useAuth();
  const [comment, setComment] = useState("");

  const onSubmit = async () => {
    if (!comment.trim()) return;

    const { error } = await supabase.from("posts").insert({
      content: comment,
      user_id: user?.id,
    });

    if (error) {
      Alert.alert(error.name, error.message);
      return;
    }

    setComment("");
  };

  return (
    <SafeAreaView edges={["bottom"]} className="p-4 flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-white text-lg font-bold">username</Text>

        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="What is on your mind?"
          className="text-white text-lg"
          placeholderTextColor="gray"
          numberOfLines={4}
          multiline
        />

        <View className="mt-auto">
          <Pressable
            onPress={onSubmit}
            className="bg-white p-3 px-6 self-end rounded-full"
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
