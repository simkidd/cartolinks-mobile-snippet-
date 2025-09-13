import { useTheme } from "@/contexts/theme.context";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface SettingsRowProps {
  label: string;
  value: string;
  onPress: () => void;
}

export const SettingsRow = ({ label, value, onPress }: SettingsRowProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between p-4 bg-transparent"
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="button"
    >
      <Text
        className={` ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </Text>

      <View className="flex-row items-center">
        <Text
          className={`mr-2 ${
            theme === "dark" ? "text-neutral-500" : "text-neutral-700"
          }`}
        >
          {value}
        </Text>
        <ChevronRight size={18} color={theme === "dark" ? "gray" : "black"} />
      </View>
    </TouchableOpacity>
  );
};
