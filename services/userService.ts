import { collection, doc, getDoc } from "firebase/firestore";
import { ScoreType } from "./scoreService";
import { saveUserInfo } from "./storage";
import { dummyDefaultUser } from "@/constants/dummy";
import { db } from "@/config/firebase";
import userNotFoundAlert from "../components/UserNotFoundAlert";

export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  highScores: Record<ScoreType, number>;
};

export const MessagesEnum = {
  userNotFount: "userNotFount",
  sessionEnded: "sessionEnded",
  userFoundAndUpdated: "userFoundAndUpdated",
};

interface ReturnType {
  message: string;
  data: UserType | null;
}

// export const CURRENT_USER = dummyDefaultUser;
const USERS = "users";
const usersCollectionRef = collection(db, USERS);

export async function getAndUpdateCurrentUserInfo(
  currentUserId?: string
): Promise<ReturnType> {
  if (!currentUserId) {
    // todo: check user if in storage

    return {
      message: MessagesEnum.sessionEnded,
      data: null,
    };
  }

  const currentUserDocRef = doc(usersCollectionRef, currentUserId);
  try {
    const userDocSnap = await getDoc(currentUserDocRef);
    if (userDocSnap.exists()) {
      const userInfo = {
        ...userDocSnap.data(),
        id: userDocSnap.id,
      };

      await saveUserInfo(userInfo as UserType);

      console.log(`userInfo`, userInfo);
      return {
        message: MessagesEnum.userFoundAndUpdated,
        data: userInfo as UserType,
      };
    } else {
      console.log("No such user!");
      return {
        message: MessagesEnum.userNotFount,
        data: null,
      };
    }
  } catch (error) {
    console.error("Error reading CurrentUser: ", error);
  }
}
