import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { router } from "expo-router";

export default function HowToUseThisApp(){
    return (
      <ImageBackground source = {{uri: "https://i.postimg.cc/HnXbt56B/Text-Background.jpg"}}style = {styles.container}>
        <View style = {{flex:20, justifyContent: 'flex-end'}}>
          <Text style = {styles.title}>How To Use</Text>
        </View>
        <View style = {{flex:5}}/>
        <View style = {{flex:78, flexDirection:'row'}}>
          <View style = {{flex:2}}/>
          <View style = {{flex:11}}>
            <Text style = {styles.Subtitle}>
              The Order To Learn
            </Text>
            <Text style = {styles.NonCenteredText}>
              {'\t'}The four main concepts this app aims to teach you are Keys, Scales, Triads, and Intervals. However since learning some of the topics taught requires knowledge of other topics, the reccomended order to learn these topics is in the following order: Keys, Scales, Intervals, and finally Triads.
            </Text>
            <Text style = {styles.Subtitle}>
              {'\n'}How To Learn Each Topic
            </Text>
            <Text style = {styles.NonCenteredText}>
              {'\t'}To learn a topic, you should first grasp the general idea using the thorough explanation in the learn feature. Then, the study feature allows you to practice with flashcards, and refer to the learn feature if necessary. Finally to put your abilities to the test, you can use the sprint feature to see how many flashcards you can correctly answer in a 30 second period.
            </Text>
          </View>
          <View style = {{flex:2}}/>
        </View>
        <View style = {{flex:4}}/>
        <View style = {styles.HomePageButtonSection}>
          <TouchableOpacity style = {styles.BackButton} onPress={()=>router.back()}>
            <Text style = {styles.Text}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {{flex:5}}/>
      </ImageBackground>
    )
  }

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

  HomePageButton: {
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

  HomePageButtonSection: {
    flex: 16,
    justifyContent: "flex-end",
    alignSelf: "center",
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

  NonCenteredText: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana",
  },

  Subtitle: {
    color: "#000",
    width: 260,
    fontFamily: "Verdana-Bold",
  },
});
