import { Stack } from 'expo-router'

export default function ScalesLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Scales"/>
    </Stack>
  )
}