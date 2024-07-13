import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: true, headerBackTitle: "Back"}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="editor" options={{headerShown: true}}></Stack.Screen>
    </Stack>
  );
}
