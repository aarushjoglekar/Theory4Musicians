import { Stack } from 'expo-router'

export default function IntervalsLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intervals"/>
        <Stack.Screen name="Learn"/>
        <Stack.Screen name="Study"/>
        <Stack.Screen name="Sprint"/>
        <Stack.Screen name="DisplayScore"/>
    </Stack>
  )
}