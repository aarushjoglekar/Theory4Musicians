import AsyncStorage from '@react-native-async-storage/async-storage'

export default async function getRecentDate() {
  const recentDate = await AsyncStorage.getItem('RecentDate')
  if (!recentDate) return null
  JSON.parse(recentDate)
  return recentDate
}