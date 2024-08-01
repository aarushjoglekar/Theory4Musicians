import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScoreType } from "./scoreService";
import { UserType } from "./userService";

export async function saveUserInfo(user: UserType): Promise<void> {
  // todo: save user in storage
  await saveStorage("user", user);
}

export async function updateUserScore(
  scoreType: ScoreType,
  scoreValue: number
): Promise<void> {
  // todo: get user from storage
  const user = await getStorage("user");
  // todo: update score in user
  const updatedUser = { ...user, [scoreType]: scoreValue };
  // todo: save updated user in storage
  await saveStorage("user", updatedUser);
}

export async function getUserHighScore(scoreType: ScoreType): Promise<number> {
  // todo: check if score is exist in storage
  const user: UserType = await getStorage("user");
  const score = user?.highScores[scoreType];
  if (score) return score;
  return 0;
}

export async function saveStorage(key: string, value: any): Promise<void> {
  // todo: stringify value
  const valueString = JSON.stringify(value);
  await AsyncStorage.setItem(key, valueString);
}

export async function getStorage(key: string): Promise<any | null> {
  // todo: parse value
  const value = await AsyncStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
}
