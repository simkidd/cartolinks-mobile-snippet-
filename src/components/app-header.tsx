import { useTheme } from "@/contexts/theme.context";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { GradientBorder } from "./shared/gradient-border";

interface AppHeaderProps {
  activeTab: "smart" | "advanced";
  setActiveTab: (tab: "smart" | "advanced") => void;
}

export const AppHeader = ({ activeTab, setActiveTab }: AppHeaderProps) => {
  const { theme } = useTheme();

  const getTextColor = (tab: "smart" | "advanced") => {
    if (activeTab === tab) {
      return theme === "dark" ? "text-white font-bold" : "text-black font-bold";
    }
    return theme === "dark" ? "text-neutral-400" : "text-neutral-500";
  };

  return (
    <View className="flex-col p-4">
      <View>
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <X size={24} color={theme === "dark" ? "white" : "black"} />
        </TouchableOpacity>
      </View>

      <View className="flex-row p-1 mt-4">
        <Pressable
          onPress={() => setActiveTab("smart")}
          className="flex-1 items-center"
        >
          <Text
            className={`font-semibold py-4 ${getTextColor(
              "smart"
            )}`}
          >
            Smart script
          </Text>
          {activeTab === "smart" && <GradientBorder />}
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("advanced")}
          className="flex-1 items-center"
        >
          <Text
            className={`font-semibold py-4 ${getTextColor(
              "advanced"
            )}`}
          >
            Advanced script
          </Text>
          {activeTab === "advanced" && <GradientBorder />}
        </Pressable>
      </View>
      <View style={{ width: 24 }} />
    </View>
  );
};
