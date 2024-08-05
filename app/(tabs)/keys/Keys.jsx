import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router } from "expo-router";
import readScore from "../../../storageServices/readScore";

export default function KeysHome() {
  const KeysHighScore = readScore("keys")
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Keys" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Learn')} text="Learn"/>
        </View>
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Study')} text="Study"/>
        </View>
        <View style={styles.KeysSection}>
          <HomeButton onPress={()=>router.navigate('/keys/Sprint')} text={"Sprint\nPersonal Best: " + KeysHighScore}/>
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

  KeysSection: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
});
