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

// import React, { useEffect } from "react"
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native"
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withSequence,
//   withTiming,
// } from "react-native-reanimated"

// const { height, width } = Dimensions.get("window")

// const BouncingButton = () => {
//   const translateY = useSharedValue(0)
//   const buttonWidth = useSharedValue(50)

//   useEffect(() => {
//     // Start the bounce and width animations
//     translateY.value = withSequence(
//       withTiming(height - 300, {
//         duration: 300,
//         easing: Easing.linear,
//       })
//     )

//     buttonWidth.value = withTiming(width - 40, {
//       duration: 1000,
//       easing: Easing.linear,
//     })
//   }, [])

//   const animatedButtonStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//       width: buttonWidth.value,
//     }
//   })

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Bounce!</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start", // Start from the top of the screen
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//   },
//   buttonContainer: {
//     position: "absolute",
//     top: 0, // Start position at the top
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     paddingVertical: 15,
//     backgroundColor: "#007bff",
//     borderRadius: 25,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// })

// export default BouncingButton
