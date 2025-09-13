import { useTheme } from "@/contexts/theme.context";
import { MaterialIcons } from "@expo/vector-icons";
import { Directory, File, Paths } from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Alert, Image, Pressable, Text, View } from "react-native";

export default function GeneratedPosterScreen() {
  const { theme } = useTheme();
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const router = useRouter();

  const isDark = theme === "dark";

  const handleDownload = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Cannot save image without permission"
        );
        return;
      }

      // Create cache directory
      const destination = new Directory(Paths.cache, "posters");
      destination.create();

      // Download the file
      const fileName = `poster_${Date.now()}.jpg`;
      const file = new File(destination, fileName);
      const output = await File.downloadFileAsync(imageUri, file);

      if (output.exists) {
        // Save to gallery
        await MediaLibrary.saveToLibraryAsync(output.uri);
        Alert.alert("Downloaded", "Poster saved to your gallery!");
      } else {
        Alert.alert("Error", "Failed to download image");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to download image");
    }
  };

  return (
    <View className={`flex-1 ${isDark ? "bg-black" : "bg-white"}`}>
      {/* Header */}
      <View className={`flex-row items-center justify-between p-4 `}>
        <Pressable
          onPress={() => router.back()}
          className="flex-row items-center gap-2"
        >
          <ArrowLeft size={22} color={isDark ? "white" : "black"} />
          <Text
            className={`${
              isDark ? "text-white" : "text-black"
            } text-lg font-medium`}
          >
            Back
          </Text>
        </Pressable>

        <Pressable onPress={handleDownload} className="p-2">
          <MaterialIcons
            name="file-download"
            size={24}
            color={isDark ? "white" : "black"}
          />
        </Pressable>
      </View>

      {/* Poster */}
      <View className="flex-1 items-center justify-center p-4">
        <Image
          source={{ uri: imageUri }}
          className="w-full h-[80%] rounded-2xl shadow-lg"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
