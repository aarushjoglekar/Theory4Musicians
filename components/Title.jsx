import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Title({title}) {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      color: "#000",
      alignSelf: "center",
      fontSize: 47,
      fontFamily: "PTSerif"
    },
});