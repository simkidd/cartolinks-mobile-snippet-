import { useTheme } from "@/contexts/theme.context";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  BackHandler,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleExit = () => {
    Alert.alert("Exit", "Are you sure you want to exit?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Exit",
        style: "destructive",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
  };

  return (
    <View className={`flex-1 p-5 ${isDark ? "bg-black" : "bg-white"}`}>
      <Text
        className={`text-2xl font-bold mb-6 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Settings
      </Text>

      <View
        className={`rounded-2xl p-4 ${
          isDark ? "bg-[#161819]" : "bg-neutral-100"
        } shadow-md`}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center justify-between py-3"
        >
          <View className="flex-row items-center">
            <Ionicons
              name={isDark ? "moon" : "sunny"}
              size={22}
              color={isDark ? "#ccc" : "#555"}
              style={{ marginRight: 12 }}
            />
            <Text
              className={`text-base ${isDark ? "text-white" : "text-gray-800"}`}
            >
              Dark Mode
            </Text>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#999", true: "#4F8EF7" }}
            thumbColor={isDark ? "#fff" : "#f4f3f4"}
          />
        </TouchableOpacity>
      </View>

      <View
        className={`mt-6 rounded-2xl p-4 ${
          isDark ? "bg-[#161819]" : "bg-neutral-100"
        } shadow-md`}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center py-3"
          onPress={handleExit}
        >
          <Ionicons
            name="exit-outline"
            size={22}
            color="#FF3B30"
            style={{ marginRight: 12 }}
          />
          <Text className="text-base font-semibold text-red-500">Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
