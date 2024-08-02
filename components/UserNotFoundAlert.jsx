import { Alert } from "react-native";

export default function UserNotFoundAlert() {
  return Alert.alert(
    "Error while finding user",
    "User not found, please login again",
    [
      {
        text: "Login",
        onPress: () => {
          // todo: Log user out
        },
        style: "cancel",
        isPreferred: true,
      },
    ],
    {
      cancelable: false,
      onDismiss: () => {
        // todo: Log user out
      },
    }
  );
}
