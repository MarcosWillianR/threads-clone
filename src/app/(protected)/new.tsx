import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function New() {
  const [comment, setComment] = useState("");

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
          <Pressable className="bg-white p-3 px-6 self-end rounded-full">
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
