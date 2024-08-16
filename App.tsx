// import CustomSplashScreen from "@/components/CustomSplashScreen"
import Navigation from "@/navigator"
import { useFonts } from "@expo-google-fonts/quicksand"
import * as React from "react"
import { StatusBar, StyleSheet } from "react-native"

import { Colors } from "@/constant/Color"
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

type Props = {}

const App: React.FC<Props> = () => {
  const [appIsReady, setAppIsReady] = React.useState(false)

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  })

  const onEndSplashScreen = () => {
    setTimeout(() => {
      setAppIsReady(true)
    }, 500)
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={Colors.SecondaryColor}
        barStyle={"dark-content"}
      />
      <SafeAreaView edges={["top"]} style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SecondaryColor,
  },
})

export default App
