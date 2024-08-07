import { Redirect, SplashScreen } from "expo-router";

export default function Index() {
  SplashScreen.preventAutoHideAsync()
  setTimeout(SplashScreen.hideAsync,2000)
  return (
    <Redirect href={"/home"}/>
  )
}
