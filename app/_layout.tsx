import { Stack } from "expo-router";
import { PostHogProvider } from "posthog-react-native";

export default function RootLayout() {
  return (
    <PostHogProvider
      apiKey="phc_BiQKcscVVjuKlwA2POPVzz8qg19ZzkwPkM29KA4PSqX"
      options={{
        host: "https://us.i.posthog.com",
      }}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" />
        <Stack.Screen name="Onboarding" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </PostHogProvider>
  );
}
