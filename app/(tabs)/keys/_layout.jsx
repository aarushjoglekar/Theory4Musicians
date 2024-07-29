import { Stack } from 'expo-router'

export default function KeysLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Keys"/>
        <Stack.Screen name="Learn"/>
        <Stack.Screen name="Study"/>
        <Stack.Screen name="Sprint"/>
        <Stack.Screen name="DisplayScore"/>
    </Stack>
  )
}