import { AppHeader } from "@/components/app-header";
import { PosterCategoryCard } from "@/components/poster-category-card";
import { SettingsRow } from "@/components/settings-row";
import { useTheme } from "@/contexts/theme.context";
import * as ImagePicker from "expo-image-picker";
import { useFocusEffect, useRouter } from "expo-router";
import { ImagePlus, X } from "lucide-react-native";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GenerateButton } from "../components/generate-button";

export default function GeneratePosterScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("display");
  const [activeTab, setActiveTab] = useState<"smart" | "advanced">("smart");
  const [image, setImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(
    "stunning promotional image of a deliciously decorated cake, emphasizing its layers, frosting, and toppings in an enticing setting."
  );

  const posterCategories = [
    {
      id: "display",
      title: "Display",
      imageUri: "https://picsum.photos/150/150?random=1",
    },
    {
      id: "promotion",
      title: "Promotion",
      imageUri: "https://picsum.photos/150/150?random=2",
    },
    {
      id: "branding",
      title: "Branding",
      imageUri: "https://picsum.photos/150/150?random=3",
    },
    {
      id: "announcement",
      title: "Announcement",
      imageUri: "https://picsum.photos/150/150?random=4",
    },
    {
      id: "party",
      title: "Party",
      imageUri: "https://picsum.photos/150/150?random=5",
    },
  ];

  const handleGenerate = () => {
    if (!description && !image) {
      Alert.alert("Please add a description or an image to generate a poster.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newImageUri =
        image ?? `https://picsum.photos/400/600?random=${Date.now()}`;
      router.push({
        pathname: "/generated-poster",
        params: { imageUri: newImageUri },
      });
    }, 2000);
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(false);
      return () => setLoading(false);
    }, [])
  );

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className={`flex-1 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <AppHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <ScrollView className="flex-1 px-4">
        <Text
          className={`text-4xl mt-4 mb-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          What type of posters do you want to create?
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6 mt-2"
        >
          {posterCategories.map((category) => (
            <PosterCategoryCard
              key={category.id}
              title={category.title}
              imageUri={category.imageUri}
              isSelected={selectedCategory === category.id}
              onPress={() => setSelectedCategory(category.id)}
            />
          ))}
        </ScrollView>

        <View
          className={`rounded-xl px-4 py-2 pb-4 mb-6 ${
            theme === "dark" ? "bg-[#161819]" : "bg-neutral-200"
          }`}
        >
          <TextInput
            value={description}
            onChangeText={setDescription}
            multiline
            className={`min-h-[100px] text-base ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            placeholder="Describe or write a prompt for your poster..."
            placeholderTextColor={theme === "dark" ? "#aaa" : "#555"}
            textAlignVertical="top"
          />
          <View className="flex-row justify-end mt-2">
            <TouchableOpacity onPress={pickImage}>
              <ImagePlus
                color={theme === "dark" ? "white" : "black"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          {image && (
            <View className="relative w-full h-40 aspect-square mt-2 rounded-lg">
              <Image
                source={{ uri: image }}
                className="w-full h-full rounded-lg"
                resizeMode="cover"
              />
              <TouchableOpacity
                onPress={() => setImage(null)}
                className="absolute top-1 right-1 bg-black/50 p-1 rounded-full"
              >
                <X size={16} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <Text
          className={`text-lg mb-2  ${
            theme === "dark" ? "text-neutral-500" : "text-neutral-700"
          }`}
        >
          Settings
        </Text>

        <View
          className={`rounded-xl ${
            theme === "dark" ? "bg-[#161819]" : "bg-neutral-200"
          } px-3`}
        >
          <SettingsRow
            label="Size"
            value="1080 x 1920 px"
            onPress={() => console.log("Edit Size")}
          />
          <View
            className={`h-[1px] mx-2 ${
              theme === "dark" ? "bg-[#2a2c2e62]" : "bg-gray-400"
            }`}
          />
          <SettingsRow
            label="Category"
            value="Foods and beverage"
            onPress={() => console.log("Edit Category")}
          />
        </View>
      </ScrollView>

      <GenerateButton onPress={handleGenerate} />

      {loading && (
        <View className="absolute inset-0 bg-black/60 items-center justify-center z-50">
          <Text className="text-white text-lg mb-4">Generating poster...</Text>
          <ActivityIndicator size="large" color="#4F8EF7" />
        </View>
      )}
    </View>
  );
}
