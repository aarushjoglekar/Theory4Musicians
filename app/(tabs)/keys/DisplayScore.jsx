import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function KeysDisplayScore() {
  const { KeysSprintScore } = useLocalSearchParams();
  const KeysHighScore = readScore("keys");
  if (KeysSprintScore > KeysHighScore){
    updateScore("keys", KeysSprintScore)
  }
  console.log(KeysHighScore)
  return (
    <DisplayScore scoreValue={KeysSprintScore} onPress={()=>router.navigate('/keys/Keys')}/>
  )
}