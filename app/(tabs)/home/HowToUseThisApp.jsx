import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Title from "../../../components/Title";

export default function HowToUseThisApp() {
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/TextBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="How To Use" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 78, flexDirection: "row" }}>
          <View style={{ flex: 2 }} />
          <View style={{ flex: 11 }}>
            <Text style={styles.Subtitle}>The Order To Learn</Text>
            <Text style={styles.LearnText}>
              {"\t"}The four main concepts this app aims to teach you are Keys,
              Scales, Triads, and Intervals. However since learning some of the
              topics taught requires knowledge of other topics, the reccomended
              order to learn these topics is in the following order: Keys,
              Scales, Intervals, and finally Triads.
            </Text>
            <Text style={styles.Subtitle}>{"\n"}How To Learn Each Topic</Text>
            <Text style={styles.LearnText}>
              {"\t"}To learn a topic, you should first grasp the general idea
              using the thorough explanation in the learn feature. Then, the
              study feature allows you to practice with flashcards, and refer to
              the learn feature if necessary. Finally to put your abilities to
              the test, you can use the sprint feature to see how many
              flashcards you can correctly answer in a 30 second period.
            </Text>
          </View>
          <View style={{ flex: 2 }} />
        </View>
        <View style={{ flex: 4 }} />
        <View style={styles.HomePageButtonSection}>
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => router.back()}
          >
            <Text style={styles.Text}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }} />
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
    width: 70,
    height: 45,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
  },

  LearnText: {
    color: "#000",
    fontFamily: "Verdana",
  },
});
