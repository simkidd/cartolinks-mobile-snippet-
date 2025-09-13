import { useTheme } from "@/contexts/theme.context";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { SparklesIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <View
      className={`flex-1 items-center justify-between p-8 px-4 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* <View className="flex-1" /> */}

      <View className="flex-1 items-center justify-center p-8">
        <Text
          className={`text-3xl font-bold text-center ${
            theme === "dark" ? "text-white" : "text-black"
          } mb-2`}
        >
          AI Poster Generator
        </Text>
        <Text
          className={`mt-4 text-base text-center ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          } max-w-sm`}
        >
          Generate stunning posters with a simple text prompt.
        </Text>
      </View>

      <View className="py-4 w-full">
        <Link href="/generate" asChild>
          <TouchableOpacity activeOpacity={0.7} className="w-full">
            <View className="rounded-xl overflow-hidden shadow-lg">
              <LinearGradient
                colors={["#108BA3", "#715CFD"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                className="flex-row items-center justify-center p-3"
              >
                <View className="mr-2">
                  <SparklesIcon
                    size={18}
                    color={theme === "dark" ? "white" : "white"}
                  />
                </View>
                <Text className="text-white text-lg">Generate an image</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
