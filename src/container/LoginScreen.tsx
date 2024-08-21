import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin"
import React, { useEffect } from "react"
import { Button, View } from "react-native"

export default function App() {
  useEffect(() => {
    configGoogleSignIn() // Initial GoogleSingIn
  }, [])

  const configGoogleSignIn = () => {
    // GoogleSignin.configure()
    GoogleSignin.configure({
      webClientId:
        "836259657720-m4dqn4f0n3pi83lajno9v0jm69bp7d31.apps.googleusercontent.com", //Mandatroy for the Android
    })
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const res = await GoogleSignin.signIn()
      console.log("🚀 ~ signIn ~ res:", res)
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.error("User Sign In is required")
          break
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.error("Google Play Services are needed")
          break
      }
      console.log("Error", error.code)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Login with Google"
        onPress={() => {
          signIn()
        }}
      />
    </View>
  )
}
