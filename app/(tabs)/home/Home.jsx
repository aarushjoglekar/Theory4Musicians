import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import HomePageButtonSection from "../../../components/HomePageButtonSection";
import Title from "../../../components/Title";

const height = Dimensions.get("window").height;

export default function Home() {
  return (
    <ImageBackground
      source={require("./../../../assets/images//BackgroundImages/Theory4NerdsBackground.jpg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Theory4Nerds" />
        </View>
        <View style={{ flex: 50 }} />
        <HomePageButtonSection
          onPress={() => router.navigate({pathname: "/../Onboarding", params: {screenIndex: 0}})}
          text="How To Use This App"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/LearnToReadMusic")}
          text="Learn To Read Music"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/ResetScores")}
          text="Reset Scores"
        />
        <View style={{ height: height * 0.1 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
