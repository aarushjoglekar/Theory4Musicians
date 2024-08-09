import { useFonts } from "expo-font";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

export default function Loading() {
  const [loaded, error] = useFonts({
    Verdana: require("../assets/fonts/Verdana.ttf"),
    PTSerif: require("../assets/fonts/PTSerif-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      router.navigate('/home');
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../constants/splash.json")}
        autoPlay
        loop
      />
    </View>
  );
}
