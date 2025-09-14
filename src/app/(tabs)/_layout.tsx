import { useTheme } from "@/contexts/theme.context";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tabBarBackground = isDark ? "#000" : "#fff";
  const tabBarBorder = isDark ? "#222" : "#e5e5e5";

  const activeColor = "#4F8EF7"; // WhatsApp green
  const inactiveColor = isDark ? "#888" : "#777";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: tabBarBackground,
          borderTopColor: tabBarBorder,
          borderTopWidth: 1,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
