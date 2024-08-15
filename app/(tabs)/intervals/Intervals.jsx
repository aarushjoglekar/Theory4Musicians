import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useState } from "react";
import Title from "../../../components/Title";
import HomeButton from "../../../components/HomeButton";
import { router, useFocusEffect } from "expo-router";
import readScore from "../../../storageServices/readScore";

export default function IntervalsHome() {
  const [IntervalsHighScore, setIntervalsHighScore] = useState(0)
  useFocusEffect(useCallback(()=>{
    readScore("intervals").then(
      (highScore) => { setIntervalsHighScore(highScore) }
  );
  }, [IntervalsHighScore]))
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/IntervalsBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Intervals" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/intervals/Learn')} text="Learn"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/intervals/Study')} text="Study"/>
        </View>
        <View style={styles.Section}>
          <HomeButton onPress={()=>router.navigate('/intervals/Sprint')} text={"Sprint\nPersonal Best: " + IntervalsHighScore}/>
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
