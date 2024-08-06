import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function KeysDisplayScore() {
  const { ScalesSprintScore } = useLocalSearchParams();
  const ScalesHighScore = readScore("scales");
  if (ScalesSprintScore > ScalesHighScore){
    updateScore("scales", ScalesSprintScore)
  }
  console.log(ScalesHighScore)
  return (
    <DisplayScore scoreValue={ScalesSprintScore} onPress={()=>router.navigate('/scales/Scales')}/>
  )
}