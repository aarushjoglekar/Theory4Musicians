import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get("window").width;
console.log(width)

export default function ScoreButton({ Score }) {
  return (
    <TouchableOpacity disabled={true} style={styles.ScoreButton}>
      <Text style={{ alignSelf: "center", fontFamily: "Verdana" }}>
        Score: {Score}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ScoreButton: {
    backgroundColor: "white",
    width: width * 0.23,
    height: width * 0.07,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginRight: width * 0.01,
  },
});
