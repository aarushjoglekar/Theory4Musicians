import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./../config/firebase";
import { dummyDefaultUser } from "../constants/dummy";
import { getUserHighScore, saveUserInfo, updateUserScore } from "./storage";
import { currentUserDocRef, UserType } from "./userService";

export type ScoreType = "keys" | "scales" | "intervals" | "triads";

export async function storeScore(
  scoreType: ScoreType,
  scoreValue: number
): Promise<void> {
  try {
    // TODO: Get current user high score
    const currentHighScore = await getUserHighScore(scoreType);

    // TODO: compare against the new one
    if (currentHighScore < scoreValue) {

      // TODO: store the highest
      await updateUserScore(scoreType, scoreValue);

      // TODO: save user info to firestore
      await updateDoc(currentUserDocRef, {
        [`highScores.${scoreType}`]: scoreValue,
      });

      console.log("🎉 New high score!");
    } else {
      console.log("Low score, do more work!");
    }
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
