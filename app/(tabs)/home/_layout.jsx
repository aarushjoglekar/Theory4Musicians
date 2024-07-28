import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function HomeLayout() {
  useFonts({
    Verdana: require("../../../assets/fonts/Verdana.ttf"),
    PTSerif: require("../../../assets/fonts/PTSerif-BoldItalic.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" />
      <Stack.Screen name="HowToUseThisApp" />
      <Stack.Screen name="LearnToReadMusic" />
    </Stack>
  );
}
