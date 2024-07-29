import { StyleSheet } from "react-native";

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