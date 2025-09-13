import { AppHeader } from "@/components/app-header";
import { PosterCategoryCard } from "@/components/poster-category-card";
import { SettingsRow } from "@/components/settings-row";
import { useTheme } from "@/contexts/theme.context";
import { ImagePlus } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { GenerateButton } from "../components/generate-button";

export default function GeneratePosterScreen() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("display");
  const [activeTab, setActiveTab] = useState<"smart" | "advanced">("smart");
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
    console.log("Generate button pressed!");
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
            placeholder="Describe your poster..."
            placeholderTextColor={theme === "dark" ? "#aaa" : "#555"}
            textAlignVertical="top"
          />
          <View className="flex-row justify-end mt-2">
            <ImagePlus color={theme === "dark" ? "white" : "black"} />
          </View>
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
    </View>
  );
}
