import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

export default function AuthLayout() {
  if (useAuth().isAuthenticated) return <Redirect href="(protected)" />;

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerTitle: "Sign up" }} />
    </Stack>
  );
}
