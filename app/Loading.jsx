import { useFonts } from "expo-font";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import updateDailyStreak from "../storageServices/updateDailyStreak";
import getRecentDate from "../storageServices/getRecentDate";
import getNextDay from "../storageServices/getNextDay";

export default function Loading() {
  const [loaded, error] = useFonts({
    Verdana: require("../assets/fonts/Verdana.ttf"),
    PTSerif: require("../assets/fonts/PTSerif-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      AsyncStorage.getItem("ViewedOnboarding").then((ViewedOnboarding) => {
        if (ViewedOnboarding == "true") {
          router.navigate("/home");
          try {
            const today = new Date();
            const todayArray = [
              today.getMonth() + 1,
              today.getDate(),
              today.getFullYear(),
            ];
            getRecentDate().then((recentDate) => {
              getNextDay(recentDate).then((nextDay) => {
                if (todayArray != recentDate && todayArray != nextDay) {
                  console.log("todayArray: ",todayArray)
                  console.log('recentDate: ',recentDate)
                  console.log('nextDay: ',nextDay)
                  updateDailyStreak(0);
                }
              });
            });
          } catch (error) {
            console.log("Error Checking End Of Streak: ", error)
          }
        } else {
          updateDailyStreak(0).then(() => {
            router.navigate('/Onboarding');
          })
        }
      })
    }
  }, [loaded, error])

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
