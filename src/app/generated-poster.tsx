import { useTheme } from "@/contexts/theme.context";
import { MaterialIcons } from "@expo/vector-icons";
import { File, Paths } from "expo-file-system";
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
    if (!imageUri) {
      Alert.alert("Error", "No image found to download");
      return;
    }

    try {
      // Request permission to save to gallery
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission denied",
          "Cannot save image without permission"
        );
        return;
      }

      // Create cache directory for images
      // const destinationDir = new Directory(Paths.cache, "images");
      // destinationDir.create({ intermediates: true });

      // Generate filename
      const filename = `poster_${Date.now()}.jpg`;
      const file = new File(Paths.cache, filename);

      // Download file
      const output = await File.downloadFileAsync(imageUri, file);

      // Save to gallery
      const asset = await MediaLibrary.createAssetAsync(output.uri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);

      Alert.alert("Success", "Image downloaded to gallery!");
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
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
