import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import Title from "./Title";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function DisplayScore({ scoreValue, onPress }) {
  return (
    <ImageBackground
      source={require("./../assets/images/BackgroundImages/DisplayScoreBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 3 }} />
        <View style={{ flex: 1.5 }}>
          <Title title="You Scored" />
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.YouScoredNumber}>{scoreValue}</Text>
        </View>
        <View style={{ flex: 6 }} />
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={onPress}
          >
            <Text style={styles.Text}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5 }} />
      </SafeAreaView>
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
    width: width * 0.18,
    height: height * 0.053,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  YouScoredNumber: {
    color: "#000",
    textAlign: "center",
    fontSize: 200,
    fontFamily: "PTSerif",
  },
});
