import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin"
import React, { useEffect } from "react"
import { Image, Pressable, Text, View } from "react-native"

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
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Quicksand_600SemiBold",
          fontSize: 24,
          lineHeight: 30,
          textAlign: "center",
          marginVertical: 60,
        }}
      >
        Welcome back to GoodLives
      </Text>
      <Image
        source={require("@assets/images/loginBear.png")}
        style={{ height: 220, width: 220 }}
      />
      <Pressable
        onPress={() => {
          signIn()
        }}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.Lavender,
          width: "80%",
          borderRadius: 32,
          height: 55,
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand_600SemiBold",
            fontSize: 16,
            lineHeight: 20,
            color: Colors.TextColor,
            marginRight: 5,
          }}
        >
          Continue with
        </Text>
        <Icon icon="google" size={22} />
      </Pressable>
    </View>
  )
}
