import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import DisplayScore from "../../../components/DisplayScore";
import readScore from "../../../storageServices/readScore";
import updateScore from "../../../storageServices/updateScore";
import readDailyStreak from "../../../storageServices/readDailyStreak";
import getRecentDate from "../../../storageServices/getRecentDate";
import getNextDay from "../../../storageServices/getNextDay";
import setRecentDate from "../../../storageServices/setRecentDate";
import updateDailyStreak from "../../../storageServices/updateDailyStreak"

export default function TriadsDisplayScore() {
  const { TriadsSprintScore } = useLocalSearchParams();
  readScore("triads").then( (highScore)=>{
    if (TriadsSprintScore > highScore){
       updateScore("triads", TriadsSprintScore)
    }
  });
  readDailyStreak().then((streak) => {
    let today = new Date()
    getRecentDate().then((recentDate) => {
      getNextDay(recentDate).then((nextDay) => {
        if (streak == 0){
          updateDailyStreak(1)
          setRecentDate();
        } else if (arraysEqual([today.getUTCMonth() + 1, today.getUTCDate(), today.getUTCFullYear()], nextDay)){
          updateDailyStreak(streak + 1)
          setRecentDate();
        }
      })
    })
  })
  return (
    <DisplayScore scoreValue={TriadsSprintScore} onPress={()=>router.navigate('/triads/Triads')}/>
  )
}