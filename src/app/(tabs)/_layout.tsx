import { useTheme } from "@/contexts/theme.context";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tabBarBackground = isDark ? "#000" : "#fff";
  const tabBarBorder = isDark ? "#222" : "#e5e5e5";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          // height: 60,
          backgroundColor: tabBarBackground,
          borderTopColor: tabBarBorder,
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={26}
              color={focused ? "#4F8EF7" : isDark ? "#888" : "#999"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings-outline"
              size={26}
              color={focused ? "#4F8EF7" : isDark ? "#888" : "#999"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
