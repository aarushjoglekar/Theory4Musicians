import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";

export default function KeysDisplayScore() {
  const { KeysSprintScore } = useLocalSearchParams();
  readScore("keys").then( (highScore)=>{
    if (KeysSprintScore > highScore){
       updateScore("keys", KeysSprintScore)
    }
  });
  return (
    <DisplayScore scoreValue={KeysSprintScore} onPress={()=>router.navigate('/keys/Keys')}/>
  )
}