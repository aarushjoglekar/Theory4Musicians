import { collection, doc, getDoc } from "firebase/firestore";
import { ScoreType } from "./scoreService";
import { saveUserInfo } from "./storage";
import { dummyDefaultUser } from "@/constants/dummy";
import { db } from "@/config/firebase";

export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  highScores: Record<ScoreType, number>;
};

const CURRENT_USER = dummyDefaultUser;
const USERS = "users";
const usersCollectionRef = collection(db, USERS);
export const currentUserDocRef = doc(usersCollectionRef, CURRENT_USER);

export async function getCurrentUserInfo(
): Promise<UserType | null> {
  try {
    const userDocSnap = await getDoc(currentUserDocRef);
    if (userDocSnap.exists()) {
      const userInfo = {
        ...userDocSnap.data(),
        id: userDocSnap.id,
      };

      await saveUserInfo(userInfo as UserType);

      console.log(`userInfo`, userInfo)
      return userInfo as UserType;
    } else {
      console.log("No such user!");
    }
  } catch (error) {
    console.error("Error reading CurrentUser: ", error);
  }

  return null;
}



