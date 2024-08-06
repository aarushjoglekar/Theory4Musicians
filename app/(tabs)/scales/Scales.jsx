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

export default function ScalesHome() {
  const KeysHighScore = readScore("keys")
  console.log(KeysHighScore)
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/ScalesBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Scales" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/scales/Learn')} text="Learn"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/scales/Study')} text="Study"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/scales/Sprint')} text={"Sprint\nPersonal Best: " + KeysHighScore}/>
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

  Section: {
    flex: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
});
