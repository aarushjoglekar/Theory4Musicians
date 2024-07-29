import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React from "react";
import Title from "../../../components/Title";
import BackButton from "../../../components/BackButton";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        <View style={{flex:7}}>
          <BackButton/>
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

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
    fontSize: RFPercentage(1.6),
  },

  LearnText: {
    color: "#000",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.6),
  },
});
