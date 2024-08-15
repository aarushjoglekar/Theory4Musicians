import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function IntervalsDisplayScore() {
  const { IntervalsSprintScore } = useLocalSearchParams();
  readScore("intervals").then( (highScore)=>{
    if (IntervalsSprintScore > highScore){
       updateScore("intervals", IntervalsSprintScore)
    }
  });
  return (
    <DisplayScore scoreValue={IntervalsSprintScore} onPress={()=>router.navigate('/intervals/Intervals')}/>
  )
}