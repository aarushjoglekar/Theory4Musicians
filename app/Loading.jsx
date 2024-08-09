import { useFonts } from "expo-font";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Loading() {
  const [loaded, error] = useFonts({
    Verdana: require("../assets/fonts/Verdana.ttf"),
    PTSerif: require("../assets/fonts/PTSerif-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      // if (AsyncStorage.getItem('ViewedOnboarding') != null){
      //   console.log(AsyncStorage.getItem('ViewedOnboarding'))
      //   router.navigate('/home')
      // } else {
      //   router.navigate('/Onboarding');
      // }
      router.navigate('/Onboarding')

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
