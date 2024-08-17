import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function getRecentDate() {
  let recentDate = await AsyncStorage.getItem('RecentDate')
  if (!recentDate) {
    let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    return [yesterday.getMonth() + 1, yesterday.getDate(), yesterday.getFullYear()]
  }
  recentDate = JSON.parse(recentDate)
  return recentDate
}