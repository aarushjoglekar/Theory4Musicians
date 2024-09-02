import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Title({title}) {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      color: "#000",
      textAlign: "center",
      fontSize: RFPercentage(5),
      fontFamily: "PTSerif"
    },
});