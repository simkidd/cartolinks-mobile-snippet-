import { router } from "expo-router";
import { X } from "lucide-react-native";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { GradientBorder } from "./shared/gradient-border";

interface AppHeaderProps {
  theme: "light" | "dark";
  activeTab: "smart" | "advanced";
  setActiveTab: (tab: "smart" | "advanced") => void;
}

export const AppHeader = ({
  theme,
  activeTab,
  setActiveTab,
}: AppHeaderProps) => (
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
          className={`font-semibold py-4 font-roboto ${
            activeTab === "smart" ? "text-white font-bold" : "text-neutral-400"
          }`}
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
          className={`font-semibold py-4 font-roboto ${
            activeTab === "advanced"
              ? "text-white font-bold"
              : "text-neutral-400"
          }`}
        >
          Advanced script
        </Text>
        {activeTab === "advanced" && <GradientBorder />}
      </Pressable>
    </View>
    <View style={{ width: 24 }} />
  </View>
);
