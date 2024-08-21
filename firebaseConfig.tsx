import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { initializeApp } from "firebase/app"
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import { Platform } from "react-native"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjLiQrHWC3kDzySp1okugH6yQfN7U6Jw0",
  authDomain: "goodlife-5743c.web.app",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "goodlife-5743c",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "836259657720",
  appId:
    Platform.OS === "android"
      ? "1:836259657720:android:dee38775a456a2a230880d"
      : "1:836259657720:ios:956b221cefdc166030880d",
  measurementId: "G-measurement-id",
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})

export { auth }
