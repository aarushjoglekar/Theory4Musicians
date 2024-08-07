import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function TriadsDisplayScore() {
  const { TriadsSprintScore } = useLocalSearchParams();
  const TriadsHighScore = readScore("triads");
  if (TriadsSprintScore > TriadsHighScore){
    updateScore("triads", TriadsSprintScore)
  }
  console.log(TriadsHighScore)
  return (
    <DisplayScore scoreValue={TriadsSprintScore} onPress={()=>router.navigate('/triads/Triads')}/>
  )
}