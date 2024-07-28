import { Stack } from 'expo-router'

export default function IntervalsLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intervals"/>
    </Stack>
  )
}