import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function setRecentDate(today = new Date()) {
  let todayArray = [today.getMonth() + 1, today.getDate(), today.getFullYear()]
  todayArray = JSON.stringify(todayArray)
  await AsyncStorage.setItem('RecentDate', todayArray)
}