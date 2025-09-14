import { useTheme } from "@/contexts/theme.context";
import { BlurView } from "expo-blur";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface PosterCategoryCardProps {
  title: string;
  imageUri: string;
  isSelected: boolean;
  onPress: () => void;
}

export const PosterCategoryCard = ({
  title,
  imageUri,
  isSelected,
  onPress,
}: PosterCategoryCardProps) => {
  const { theme } = useTheme();

  return (
    <View className="w-[85px] h-36 mr-3">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        accessible
        accessibilityRole="button"
        className={`relative w-full h-full`}
      >
        <View
          className={`w-full rounded-xl border-transparent border-2 overflow-hidden ${
            isSelected
              ? theme === "dark"
                ? "border-white"
                : "!border-[#715CFD]"
              : ""
          }`}
        >
          {/* Background image */}
          <Image
            source={{ uri: imageUri }}
            className="w-full h-full"
            resizeMode="cover"
          />

          <BlurView
            intensity={90}
            tint="dark"
            className="absolute bottom-0 left-0 right-0 px-2 py-3"
          >
            <Text className="text-white text-xs text-center">{title}</Text>
          </BlurView>
        </View>
      </TouchableOpacity>
    </View>
  );
};
