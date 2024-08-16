import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function readDailyStreak(){
  const streak = await AsyncStorage.getItem('DailyStreak');
  if (!streak) return 0;
  return JSON.parse(streak);
}