import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router, useLocalSearchParams } from "expo-router";

export default function KeysHome() {
  const params = useLocalSearchParams();
  console.log(params)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Keys" />
          {/* <Title title={KeysSprintScore}/> */}
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Learn')} text="Learn"/>
        </View>
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Study')} text="Study"/>
        </View>
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Sprint')} text={"Sprint\nPersonalBest"}/>
        </View>

        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Sprint')} text={"New Score"}/>
        </View>
        
        <View style={{ flex: 55 }} />
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
    textAlign: "center",
    fontSize: 50,
    fontFamily: "GillSans-SemiBoldItalic",
  },

  Button: {
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

  KeysSection: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },

  StudySection: {
    flex: 12,
    justifyContent: "center",
    alignSelf: "center",
  },

  StudyKeysImage: {
    width: 220,
    height: 220,
    alignSelf: "center",
    borderRadius: 5,
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

  YouScoredNumber: {
    color: "#000",
    textAlign: "center",
    fontSize: 200,
    fontFamily: "GillSans-SemiBoldItalic",
  },

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
  },

  LearnText: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana",
  },
});
