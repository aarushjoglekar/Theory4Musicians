import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./../config/firebase";
import { dummyDefaultUser } from "../constants/dummy";

type ScoreType = "keys" | "scales" | "intervals" | "triads";

const CURRENT_USER = dummyDefaultUser;
const USERS = "users";
const usersCollectionRef = collection(db, USERS);

export async function storeScore(
  scoreType: ScoreType,
  scoreValue: number
): Promise<void> {
  try {
 
    // TODO: Get current user high score
  

    // TODO: compare against the new one

    // TODO: store the highest
    
    // console.log("Document written with ID: ", newScoreRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export async function getHighestScore(
  scoreType: ScoreType
): Promise<number | null> {
  try { 

    // TODO: get user data "dkalslsfdk.highScores.keys"
    // TODO: return the needed score
    // const docRef = doc(db, "scores", docId);
    // console.log("Document read with ID: ", newScoreRef.id);
  } catch (error) {
    // console.error("Error reading document: ", error);
  }

  return null;
}

// todo: get user info 
export const getCurrentUserInfo = (userId: string) => {
  // const user = getDoc(usersCollectionRef)
}


