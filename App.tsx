import { Colors } from "@/constant/Color"
import Navigation from "@/navigator"
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand"
import * as React from "react"
import { StatusBar, StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./src/store"

type Props = {}

const App: React.FC<Props> = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  })

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
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
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
