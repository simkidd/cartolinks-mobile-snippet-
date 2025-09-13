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
}: PosterCategoryCardProps) => (
  <View
    className={`relative w-[85px] h-36 rounded-xl border-transparent border-2 overflow-hidden mr-3 ${
      isSelected ? " border-white" : ""
    }`}
  >
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      accessible
      accessibilityRole="button"
      className={`relative w-full h-full`}
    >
      {/* Background image */}
      <Image
        source={{ uri: imageUri }}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      <BlurView
        intensity={90}
        tint="dark"
        className="absolute bottom-0 left-0 right-0 px-2 py-2"
      >
        <Text className="text-white text-xs text-center font-bold">{title}</Text>
      </BlurView>
    </TouchableOpacity>
  </View>
);
