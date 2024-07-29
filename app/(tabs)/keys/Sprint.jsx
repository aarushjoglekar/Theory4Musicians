import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import KeysProblemFunction from "./../../../constants/KeysProblemFunction";
import KeysDictionary from "./../../../constants/KeysDictionary";
import shuffle from "../../../constants/Shuffle";
import Title from "../../../components/Title";
import { router } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(KeysDictionary) {
  let KeysProblem = KeysProblemFunction(KeysDictionary);
  return KeysProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

let firstVisit = true;

export default function KeysSprint() {
  let [KeysSprintScore, SetKeysSprintScore] = useState(0);
  let [KeysProblem, ResetKeysProblem] = useState(
    KeysProblemFunction(KeysDictionary)
  );
  if (firstVisit == true) {
    let id = setTimeout(() => router.navigate("./keys/DisplayScore"), 2000);
    firstVisit = false;
  }
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/SprintBackground.jpeg")}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
      <View style={{ flex: 10, justifyContent: "flex-end" }}>
        <Title title="Sprint" />
      </View>
      <View style={{ flex: 5 }} />
      <View style={{ flex: 35, justifyContent: "center" }}>
        <Image style={styles.StudyKeysImage} source={{ uri: KeysProblem[0] }} />
      </View>
      <View style={{ flex: 5 }} />
      <View style={styles.StudySection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (correctAnswerSpot == 0) {
              KeysSprintScore += 1;
              SetKeysSprintScore(KeysSprintScore);
            }
            ResetKeysProblem(setProblem(KeysDictionary));
            answerOrder = shuffle(answerOrder);
            correctAnswerSpot = answerOrder.indexOf(1);
          }}
        >
          <Text style={styles.Text}>{KeysProblem[answerOrder[0]]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.StudySection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (correctAnswerSpot == 1) {
              KeysSprintScore += 1;
              SetKeysSprintScore(KeysSprintScore);
            }
            ResetKeysProblem(setProblem(KeysDictionary));
            answerOrder = shuffle(answerOrder);
            correctAnswerSpot = answerOrder.indexOf(1);
          }}
        >
          <Text style={styles.Text}>{KeysProblem[answerOrder[1]]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.StudySection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (correctAnswerSpot == 2) {
              KeysSprintScore += 1;
              SetKeysSprintScore(KeysSprintScore);
            }
            ResetKeysProblem(setProblem(KeysDictionary));
            answerOrder = shuffle(answerOrder);
            correctAnswerSpot = answerOrder.indexOf(1);
          }}
        >
          <Text style={styles.Text}>{KeysProblem[answerOrder[2]]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.StudySection}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (correctAnswerSpot == 3) {
              KeysSprintScore += 1;
              SetKeysSprintScore(KeysSprintScore);
            }
            ResetKeysProblem(setProblem(KeysDictionary));
            answerOrder = shuffle(answerOrder);
            correctAnswerSpot = answerOrder.indexOf(1);
          }}
        >
          <Text style={styles.Text}>{KeysProblem[answerOrder[3]]}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 10, justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => {
            router.navigate("./keys/DisplayScore");
            clearTimeout(id);
          }}
        >
          <Text style={styles.BackText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 5, flexDirection: "row" }}>
        <View style={{ flex: 15 }}>
          <Text style={{ alignSelf: "flex-end", fontFamily: "Verdana" }}>
            Score: {KeysSprintScore}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: RFPercentage(2),
  },

  BackText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: RFPercentage(1.8),
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
    width: width * 0.18,
    height: height * 0.053,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
