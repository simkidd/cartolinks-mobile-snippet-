import { LinearGradient } from "expo-linear-gradient";

export const GradientBorder = () => (
  <LinearGradient
    colors={["#108BA3", "#715CFD"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    className="h-[3px] w-full rounded-md"
  />
);
