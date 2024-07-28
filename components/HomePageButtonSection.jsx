import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomePageButtonSection({onPress = null, text}) {
  return (
    <TouchableOpacity
      style={styles.HomePageButton}
      onPress={onPress}
    >
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    HomePageButton: {
      justifyContent: "center",
      alignSelf: 'center',
      backgroundColor: "#edebeb",
      width: width * 0.53,
      height: height * 0.07,
      borderRadius: 20,
      borderWidth: 0.5,
    },
  
    Text: {
      color: "#000",
      textAlign: "center",
      fontFamily: "Verdana",
      //fontSize: 17,
      fontSize: RFPercentage(2),

    },
  });