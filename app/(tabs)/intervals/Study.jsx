import { useEffect, useState } from "react";
import { router } from "expo-router";
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
import Title from "../../../components/Title";
import { IntervalsDictionary } from "../../../constants/IntervalsDictionary"
import shuffle from "../../../constants/Shuffle";
import IntervalsProblemFunction from "../../../constants/IntervalsProblemFunction";
import { RFPercentage } from "react-native-responsive-fontsize";
import ScoreButton from "../../../components/ScoreButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function setProblem(IntervalsDictionary) {
  let IntervalsProblem = IntervalsProblemFunction(IntervalsDictionary);
  return IntervalsProblem;
}

let answerOrder = [1, 2, 3, 4];
answerOrder = shuffle(answerOrder);
let correctAnswerSpot = answerOrder.indexOf(1);

export default function IntervalsStudy() {
  const [IntervalsStudyScore, SetIntervalsStudyScore] = useState(0);
  const [IntervalsProblem, ResetIntervalsProblem] = useState(
    IntervalsProblemFunction(IntervalsDictionary)
  );
  const [imageSource, setImageSource] = useState(IntervalsProblem[0]);
  useEffect(() => {
    setImageSource(IntervalsProblem[0]);
  }, [IntervalsProblem]);
  return (
    <ImageBackground
      source={require("./../../../assets/images/BackgroundImages/StudyBackground.jpeg")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 10, justifyContent: "flex-end" }}>
          <Title title="Study" />
        </View>
        <View style={{ flex: 5 }} />
        <View style={{ flex: 35, justifyContent: "center" }}>
          <Image
            style={styles.StudyIntervalsImage}
            source={{ uri: imageSource }}
          />
        </View>
        <View style={{ flex: 5 }} />
        <View style={styles.StudySection}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 0) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsDictionary));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[0]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 1) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsDictionary));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[1]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 2) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsDictionary));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[2]]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.StudySection}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              if (correctAnswerSpot == 3) {
                SetIntervalsStudyScore(IntervalsStudyScore + 1);
              }
              ResetIntervalsProblem(setProblem(IntervalsDictionary));
              answerOrder = shuffle(answerOrder);
              correctAnswerSpot = answerOrder.indexOf(1);
            }}
          >
            <Text style={styles.Text}>{IntervalsProblem[answerOrder[3]]}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 10, justifyContent: "center", flexDirection: "row" }}
        >
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.BackText}>Back</Text>
          </TouchableOpacity>
          <View style={{ flex: 0.03 }} />
          <TouchableOpacity
            style={styles.BackButton}
            onPress={() => {
              router.navigate("/intervals/Learn");
            }}
          >
            <Text style={styles.BackText}>Learn</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <ScoreButton Score={IntervalsStudyScore} />
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
    width: 240,
    height: height * 0.064,
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

  StudyIntervalsImage: {
    width: width * 0.875,
    height: width * 0.55,
    alignSelf: 'center',
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
