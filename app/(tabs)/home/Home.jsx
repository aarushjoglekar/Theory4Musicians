import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Home() {
  return (
    <ImageBackground
      source={{
        uri: "https://i.postimg.cc/TYYFs92S/Theory4-Nerds-Background.jpg",
      }}
      style={styles.container}
    >
      <View style={{ flex: 20, justifyContent: "flex-end" }}>
        <Text style={styles.title}>Theory4Nerds</Text>
      </View>
      <View style={{ flex: 50 }} />
      <View style={styles.HomePageButtonSection}>
        <TouchableOpacity
          style={styles.HomePageButton}
          onPress={() => router.navigate("/home/HowToUseThisApp")}
        >
          <Text style={styles.Text}>How to Use This App</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HomePageButtonSection}>
        <TouchableOpacity
          style={styles.HomePageButton}
          onPress={() => router.navigate("/home/LearnToReadMusic")}
        >
          <Text style={styles.Text}>Learn to Read Music</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HomePageButtonSection}>
        <TouchableOpacity style={styles.HomePageButton}>
          <Text style={styles.Text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 10 }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 50,
    fontFamily: "GillSans-SemiBoldItalic",
  },

  HomePageButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 210,
    height: 57,
    borderRadius: 20,
    borderWidth: 0.5,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: 17,
  },

  HomePageButtonSection: {
    flex: 16,
    justifyContent: "flex-end",
    alignSelf: "center",
  },

  BackButton: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: 70,
    height: 45,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  NonCenteredText: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana",
  },

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
  },
});
