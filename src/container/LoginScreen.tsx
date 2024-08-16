import * as React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

type Props = {}

const LoginScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.titleText}>Welcome back to GoodLives</Text>
      <Image
        source={require("@assets/images/relaxBear.png")}
        style={{ height: 160, width: 160 }}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 325,
    width: "100%",
  },
  titleText: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 24,
    lineHeight: 30,
    marginVertical: 40,
  },
})
export default LoginScreen
