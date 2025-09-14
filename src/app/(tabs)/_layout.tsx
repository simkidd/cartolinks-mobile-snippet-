import { CustomTab } from "@/components/shared/custom-tab";
import { HapticTab } from "@/components/shared/haptic-tab";
import { useTheme } from "@/contexts/theme.context";
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
          marginTop: 6,
          color: inactiveColor
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
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <CustomTab
              label="Home"
              iconName={focused ? "home" : "home-outline"}
              focused={focused}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <CustomTab
              label="Settings"
              iconName={focused ? "settings" : "settings-outline"}
              focused={focused}
              color={focused ? activeColor : inactiveColor}
            />
          ),
        }}
      />
    </Tabs>
  );
}
