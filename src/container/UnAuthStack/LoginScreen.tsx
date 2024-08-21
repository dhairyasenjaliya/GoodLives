import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import { login } from "@/store/actions/authActions"
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin"
import React, { useEffect } from "react"
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    configGoogleSignIn() // Initial GoogleSingIn
  }, [])

  const configGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "836259657720-m4dqn4f0n3pi83lajno9v0jm69bp7d31.apps.googleusercontent.com", // Mandatroy for the Android
    })
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const res = await GoogleSignin.signIn()
      if (res && res.idToken) {
        console.log("🚀 ~ signIn ~ res:", res)
        dispatch(login(res))
      }
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.error("User Sign In is required")
          break
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.error("Google Play Services are needed")
          break
      }
      if (error) {
        Alert.alert("Login Error")
      }
      console.log("Error", error.code)
    }
  }

  return (
    <View style={styles.screenContain}>
      <Text style={styles.loginTitle}>Welcome back to GoodLives</Text>
      <Image
        source={require("@assets/images/loginBear.png")}
        style={styles.bearLogo}
      />
      <Pressable
        onPress={() => {
          signIn()
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue with</Text>
        <Icon icon="google" size={22} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContain: { flex: 1, alignItems: "center" },
  loginTitle: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    marginVertical: 60,
  },
  bearLogo: { height: 220, width: 220 },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Lavender,
    width: "80%",
    borderRadius: 32,
    height: 55,
    marginTop: 80,
  },
  buttonText: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 16,
    lineHeight: 20,
    color: Colors.TextColor,
    marginRight: 5,
  },
})
