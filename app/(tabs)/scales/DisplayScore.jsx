import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function ScalesDisplayScore() {
  const { ScalesSprintScore } = useLocalSearchParams();
  readScore("scales").then( (highScore)=>{
    if (ScalesSprintScore > highScore){
       updateScore("scales", ScalesSprintScore)
    }
  });
  return (
    <DisplayScore scoreValue={ScalesSprintScore} onPress={()=>router.navigate('/scales/Scales')}/>
  )
}