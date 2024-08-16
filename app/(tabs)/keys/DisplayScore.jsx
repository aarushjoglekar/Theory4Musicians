import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import updateDailyStreak from "../../../storageServices/updateDailyStreak";
import setRecentDate from "../../../storageServices/setRecentDate";
import getNextDay from "../../../storageServices/getNextDay";
import getRecentDate from "../../../storageServices/getRecentDate";

export default function KeysDisplayScore() {
  const { KeysSprintScore } = useLocalSearchParams();
  readScore("keys").then( (highScore)=>{
    if (KeysSprintScore > highScore){
       updateScore("keys", KeysSprintScore)
    }
  });
  readDailyStreak().then((streak) => {
    let today = new Date()
    getNextDay(getRecentDate()).then((nextDay) => {
      if (streak == 0){
        updateDailyStreak(1)
        setRecentDate();
      } else if ([today.getMonth + 1, today.getDate, today.getFullYear] == nextDay){
        updateDailyStreak(streak + 1)
        setRecentDate();
      }
    })
  })
  return (
    <DisplayScore scoreValue={KeysSprintScore} onPress={()=>router.navigate('/keys/Keys')}/>
  )
}