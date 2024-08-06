import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function updateScore(scoreType, scoreValue){
  const scoreValueString = JSON.stringify(scoreValue);
  await AsyncStorage.setItem(scoreType, scoreValueString);
}