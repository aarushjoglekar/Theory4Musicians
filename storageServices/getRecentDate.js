import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function getRecentDate() {
  const recentDate = await AsyncStorage.getItem('RecentDate')
  if (!recentDate) return '[0,0,0]'
  recentDateParsed = JSON.parse(recentDate)
  return recentDateParsed
}