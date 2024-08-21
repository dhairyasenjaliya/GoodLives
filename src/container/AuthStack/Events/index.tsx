import { Header } from "@/components"
import { Colors } from "@/constant/Color"
import * as React from "react"
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { useSelector } from "react-redux"

type Props = {}

const EventScreen: React.FC<Props> = () => {
  const GivenName = useSelector(
    (state: any) => state.auth?.user?.user?.givenName || ""
  )

  return (
    <View>
      <Header />
      <ScrollView bounces={false}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode={"stretch"}
          source={require("@assets/images/homeBackground.png")}
        >
          <Text style={styles.textName}>Events Comming Soon</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 325,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    fontSize: 28,
    lineHeight: 35,
    color: Colors.TextColor,
    fontFamily: "Quicksand_600SemiBold",
  },
})

export default EventScreen
