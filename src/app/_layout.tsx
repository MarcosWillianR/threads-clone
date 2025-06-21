import "../../global.css";

import relativeTime from "dayjs/plugin/relativeTime";
import { Slot } from "expo-router";
import dayjs from "dayjs";

import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";

dayjs.extend(relativeTime);

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
