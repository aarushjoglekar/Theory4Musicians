import { Stack } from 'expo-router'

export default function ScalesLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Scales"/>
        <Stack.Screen name="Learn"/>
        <Stack.Screen name="Study"/>
        <Stack.Screen name="Sprint"/>
        <Stack.Screen name="DisplayScore"/>
    </Stack>
  )
}