import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface SettingsRowProps {
  label: string;
  value: string;
  onPress: () => void;
}

export const SettingsRow = ({ label, value, onPress }: SettingsRowProps) => (
  <TouchableOpacity
    className="flex-row items-center justify-between p-4 my-2  bg-transparent"
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button"
  >
    <Text className="text-gray-300 font-medium">{label}</Text>

    <View className="flex-row items-center">
      <Text className="text-neutral-500 mr-2">{value}</Text>
      <ChevronRight size={18} color="gray" />
    </View>
  </TouchableOpacity>
);
