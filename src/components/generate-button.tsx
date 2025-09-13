import { useTheme } from "@/contexts/theme.context";
import { Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

interface GenerateButtonProps {
  onPress: () => void;
}

export const GenerateButton = ({ onPress }: GenerateButtonProps) => {
  const { theme } = useTheme();

  const lightModeButtonClasses = "border border-gray-400 bg-transparent";
  const darkModeButtonClasses = "bg-white";

  return (
    <View className="p-4 mb-8">
      <TouchableOpacity
        className={`w-full`}
        onPress={onPress}
        activeOpacity={0.6}
        accessibilityRole="button"
      >
        <View
          className={`flex-row items-center justify-center p-3 rounded-xl shadow-xl ${
            theme === "dark" ? darkModeButtonClasses : lightModeButtonClasses
          }`}
        >
          <View className="mr-2">
            <Svg height="20" width="20">
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0" stopColor="#108BA3" />
                  <Stop offset="1" stopColor="#715CFD" />
                </LinearGradient>
              </Defs>
              <Circle cx="10" cy="10" r="8" fill="url(#grad)" />
              <Circle cx="10" cy="10" r="10" fill="url(#grad)" opacity={0.3} />
              <Circle cx="10" cy="10" r="8" fill="url(#grad)" />
            </Svg>
          </View>
          <Text
            className={`text-lg ${
              theme === "dark" ? "text-black" : "text-black"
            }`}
          >
            Generate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
