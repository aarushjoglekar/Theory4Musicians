import { View, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import React, { useCallback, useState } from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router, useFocusEffect } from "expo-router";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function KeysHome() {
  const [KeysHighScore, setKeysHighScore] = useState(0)
  useFocusEffect(useCallback(()=>{
    readScore("keys").then(
      (highScore) => { setKeysHighScore(highScore) }
  );
  }, [KeysHighScore]))
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
          <HomeButton
            onPress={() => router.navigate("/keys/Learn")}
            text="Learn"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => router.navigate("/keys/Study")}
            text="Study"
          />
        </View>
        <View style={styles.KeysSection}>
          <HomeButton
            onPress={() => router.navigate("/keys/Sprint")}
            text={"Sprint\nPersonal Best: " + KeysHighScore}
          />
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
