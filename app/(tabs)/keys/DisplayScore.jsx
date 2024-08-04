import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function KeysDisplayScore() {
  const { KeysSprintScore } = useLocalSearchParams();
  return (
    <DisplayScore scoreValue={KeysSprintScore} onPress={()=>router.navigate('/keys/Keys')}/>
  )
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
