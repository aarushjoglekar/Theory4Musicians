import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import Title from '../../../components/Title'
import { router } from "expo-router";

export default function KeysHome() {
  {
    /* 
    if (KeysSprintScore > KeysHighScore){
    KeysHighScore = KeysSprintScore
  }
  visit = 0;
  */
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/KeysBackground.jpeg")}
      style={styles.container}
    >
      <View style={{ flex: 20, justifyContent: "flex-end" }}>
        <Title title="Keys"/>
      </View>
      <View style={{ flex: 5 }} />
      <View style={styles.KeysSection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => router.navigate("./keys/Learn")}
        >
          <Text style={styles.Text}>Learn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.KeysSection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => router.navigate("./keys/Study")}
        >
          <Text style={styles.Text}>Study</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.KeysSection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            KeysSprintScore = 0;
            router.navigate("./keys/Sprint");
          }}
        >
          <Text style={styles.Text}>
            Sprint{"\n"}
            {/*Personal Best: {KeysHighScore}*/}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 55 }} />
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