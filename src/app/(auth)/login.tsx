import { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signinWithEmail = async () => {
    if (!email || !password) {
      Alert.alert("Please enter an email and password");
      return;
    }
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert(error.message);

    setIsLoading(false);
  };

  return (
    <ScrollView
      className="bg-neutral-900"
      contentContainerClassName="flex-1 items-center justify-center px-6"
    >
      <View className="w-full max-w-sm">
        <Text className="text-3xl font-bold text-center mb-8 text-white">
          Welcome Back
        </Text>

        <View className="gap-4">
          <View>
            <Text className="text-sm font-medium text-neutral-300 mb-1">
              Email
            </Text>
            <TextInput
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500"
              placeholder="Enter your email"
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View>
            <Text className="text-sm font-medium text-neutral-300 mb-1">
              Password
            </Text>
            <TextInput
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500"
              placeholder="Enter your password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity
            className="w-full bg-white py-3 rounded-lg mt-6"
            onPress={signinWithEmail}
            activeOpacity={0.8}
          >
            <Text className="text-black text-center font-semibold">
              {isLoading ? "Logging in..." : "Sign in"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-400">Don't have an account? </Text>
            <Link href="/signup" asChild>
              <Pressable>
                <Text className="text-blue-400 font-medium">Create one</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
