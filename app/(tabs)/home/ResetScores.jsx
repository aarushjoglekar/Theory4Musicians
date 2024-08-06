import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import BackButton from "../../../components/BackButton";
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
          <Title title="Reset Scores" />
        </View>
        <View style={{ flex: 20}} />
        <HomePageButtonSection text="Reset Keys Scores" />
        <View style={{ height: 40 }} />
        <HomePageButtonSection text="Reset Scales Scores" />
        <View style={{ height: 40 }} />
        <HomePageButtonSection text="Reset Intervals Scores" />
        <View style={{ height: 40 }} />
        <HomePageButtonSection text="Reset Triads Scores" />
        <View style={{ height: height * 0.1 }} />
        <BackButton />
        <View style={{flex:10}}/>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
