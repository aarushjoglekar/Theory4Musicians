import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const width = Dimensions.get('window').width;

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
    container: {
      flex: 1,
    },
  
    title: {
      color: "#000",
      alignSelf: "center",
      fontSize: 50,
      fontFamily: "GillSans-SemiBoldItalic",
    },
  
    HomePageButton: {
      justifyContent: "center",
      alignSelf: 'center',
      backgroundColor: "#edebeb",
      width: width * 0.5,
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
  
    HomePageButtonSection: {
      flex: 16,
      alignItems: 'center',
    },
  });