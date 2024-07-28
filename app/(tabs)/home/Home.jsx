import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import HomePageButtonSection from "../../../components/HomePageButtonSection";

const height = Dimensions.get("window").height;

export default function Home() {
  return (
    <ImageBackground
      source={
        require('./../../../assets/images//BackgroundImages/Theory4NerdsBackground.jpg')
      }
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Text style={styles.title}>Theory4Nerds</Text>
        </View>
        <View style={{ flex: 50, justifyContent: "space-evenly" }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/HowToUseThisApp")}
          text="How To Use This App"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection
          onPress={() => router.navigate("/home/LearnToReadMusic")}
          text="Learn To Read Music"
        />
        <View style={{ height: 40 }} />
        <HomePageButtonSection text="Sign Out" />
        <View style={{ height: height * 0.1 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#000",
    alignSelf: "center",
    fontSize: 50,
    fontFamily: "GillSans-SemiBoldItalic",
  },
});
