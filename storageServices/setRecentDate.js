import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setRecentDate() {
  let today = new Date()
  today = [today.getUTCMonth() + 1, today.getUTCDate(), today.getUTCFullYear()]
  today = JSON.stringify(today)
  await AsyncStorage.setItem('RecentDate', today)
}