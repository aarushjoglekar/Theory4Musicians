import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Title from './../../../components/Title'

export default function DisplayScore() {
  return (
    <ImageBackground
      source={require('./../../../assets/images/BackgroundImages/DisplayScoreBackground.jpeg')}
      style={styles.container}
    >
      <View style={{ flex: 3 }} />
      <View style={{ flex: 1.5 }}>
        <Title title="You Scored"/>
      </View>
      <View style={{ flex: 5 }}>
        <Text style={styles.YouScoredNumber}>{KeysSprintScore}</Text>
      </View>
      <View style={{ flex: 6 }} />
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => router.navigate("./keys/Keys")}
        >
          <Text style={styles.Text}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.5 }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: 17,
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
});
