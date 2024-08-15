import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function TriadsDisplayScore() {
  const { TriadsSprintScore } = useLocalSearchParams();
  readScore("triads").then( (highScore)=>{
    if (TriadsSprintScore > highScore){
       updateScore("triads", TriadsSprintScore)
    }
  });
  return (
    <DisplayScore scoreValue={TriadsSprintScore} onPress={()=>router.navigate('/triads/Triads')}/>
  )
}