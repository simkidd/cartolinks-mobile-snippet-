import { ThemeProvider, useTheme } from "@/contexts/theme.context";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import "./global.css";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#000000" : "#FFFFFF",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar
        style={theme === "dark" ? "light" : "dark"}
        backgroundColor={theme === "dark" ? "#000000" : "#FFFFFF"}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </View>
  );
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
  Roboto: require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  "Roboto-Medium": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),

  Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
  "Nunito-Bold": require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
  "Nunito-SemiBold": require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
});


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
