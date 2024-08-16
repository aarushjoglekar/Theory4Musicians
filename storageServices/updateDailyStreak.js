import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function updateDailyStreak(streak) {
  const streakString = JSON.stringify(streak);
  await AsyncStorage.setItem("DailyStreak", streakString)
}