import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setRecentDate() {
  let today = new Date()
  today = [today.getMonth() + 1, today.getDate(), today.getFullYear()]
  JSON.stringify(today)
  await AsyncStorage.setItem('RecentDate', today)
}