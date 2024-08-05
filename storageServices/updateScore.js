import { AsyncStorage } from "@react-native-async-storage/async-storage";

export default async function updateScore(scoreType, scoreValue) {
  scoreValue = JSON.stringify(scoreValue);
  try {
    await AsyncStorage.setItem(scoreType, scoreValue);
  } catch (error) {
    console.log("Error updating score: " + error);
  }
}
