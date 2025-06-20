import "../../global.css";

import { Slot } from "expo-router";

import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#fff",
    card: "#101010",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
