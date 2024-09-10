import { Redirect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { usePostHog } from "posthog-react-native";
import uuid from 'react-native-uuid';

export default function Index() {
  const posthog = usePostHog()
  AsyncStorage.getItem('id').then((storageID)=>{
    let id;
    if (storageID == null){
      id = uuid.v4()
    } else {
      id = storageID
    }
    id = JSON.stringify(id)
    let today = new Date()
    posthog.identify(id,{
      lastSeen: today
    })
  })
  return (
    <Redirect href={"/Loading"} />
  );
}
