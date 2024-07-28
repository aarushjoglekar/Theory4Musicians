import { Stack } from 'expo-router'

export default function TriadsLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="Triads"/>
    </Stack>
  )
}