import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function readScore(scoreType) {
  try {
    const scoreValue = await AsyncStorage.getItem(scoreType);
    if (scoreValue !== null) {
      return JSON.parse(scoreValue);
    } else {
      return 0;
    }
  } catch (error) {
    console.log("Error reading score: " + error);
    return 0;
  }
}
