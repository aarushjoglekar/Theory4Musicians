import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import React from "react";
import BackButton from "../../../components/BackButton";
import HomePageButtonSection from "../../../components/HomePageButtonSection";
import Title from "../../../components/Title";

const height = Dimensions.get("window").height;

export default function ResetScores() {
  return (
    <ImageBackground
      source={require("./../../../assets/images//BackgroundImages/ResetScoresBackground.jpg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Reset Scores" />
        </View>
        <View style={{ flex: 20 }} />
        <HomePageButtonSection
          text="Reset Keys Score"
          onPress={() =>
            Alert.alert(
              "Resetting Keys High Score",
              "Are you sure you want to reset your personal best?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Scales Score"
          onPress={() =>
            Alert.alert(
              "Resetting Scales High Score",
              "Are you sure you want to reset your personal best?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Intervals Score"
          onPress={() =>
            Alert.alert(
              "Resetting Intervals High Score",
              "Are you sure you want to reset your personal best?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset Triads Score"
          onPress={() =>
            Alert.alert(
              "Resetting Triads High Score",
              "Are you sure you want to reset your personal best?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") },
              ]
            )
          }
        />
        <View style={{ height: 20 }} />
        <HomePageButtonSection
          text="Reset All Scores"
          onPress={() =>
            Alert.alert(
              "Resetting ALL High Scores",
              "Are you sure you want to reset your personal best?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => console.log("Yes Pressed") },
              ]
            )
          }
        />
        <View style={{ height: height * 0.1 }} />
        <BackButton />
        <View style={{ flex: 10 }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
