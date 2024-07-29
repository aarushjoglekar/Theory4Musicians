import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function HomeButton({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    backgroundColor: "#edebeb",
    width: width * 0.5,
    height: height * 0.065,
    borderRadius: 20,
    borderWidth: 0.5,
  },

  Text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(2),
  },
});
