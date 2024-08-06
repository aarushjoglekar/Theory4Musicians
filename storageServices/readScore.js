import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function readScore(scoreType){
  const score = await AsyncStorage.getItem(scoreType);
  if (!score) return 0;
  return JSON.parse(score);
}