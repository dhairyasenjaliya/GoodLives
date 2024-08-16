import HomeScreen from "@/container/HomeScreen"
import MyRewardScreen from "@/container/MyRewardScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"

export type AppStackParamList = {
  HomeScreen: undefined
  MyRewardScreen: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>

const Tab = createBottomTabNavigator<AppStackParamList>()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="MyRewardScreen" component={MyRewardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
