import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function updateScore(scoreType, scoreValue) {
  scoreValueStringified = JSON.stringify(scoreValue);
  try {
    await AsyncStorage.setItem(scoreType, scoreValueStringified);
  } catch (error) {
    console.log("Error updating score: " + error);
  }
}
