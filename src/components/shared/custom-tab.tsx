import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

interface CustomTabProps {
  label: string;
  iconName: any;
  focused: boolean;
  color: string;
}

export const CustomTab = ({
  label,
  iconName,
  focused,
  color,
}: CustomTabProps) => {
  const containerBgColor = focused ? "rgba(113,92,253,0.15)" : "transparent";

  return (
    <View
      className="items-center rounded-2xl p-2"
      style={{
        backgroundColor: containerBgColor,
        minWidth: 60, 
        height: 34,
        alignItems: "center",
        borderRadius: 50,
      }}
    >
      <Ionicons name={iconName} size={22} color={color} />
    </View>
  );
};
