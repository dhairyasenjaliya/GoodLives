import HomeScreen from "@/container/HomeScreen"
import LoginScreen from "@/container/LoginScreen"
import MyRewardScreen from "@/container/MyRewardScreen"
import PlannerDetailScreen from "@/container/PlannerDetailScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { useSelector } from "react-redux"

export type AuthStackParamList = {
  // PlannerDetailScreen: undefined
  LoginScreen: undefined
}

export type AppStackParamList = {
  HomeScreen: undefined
  MyRewardScreen: undefined
  PlannerDetailScreen: undefined
  // LoginScreen: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>

const Tab = createBottomTabNavigator<AppStackParamList>()
const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function Navigator() {
  const isUserAuthenticated = useSelector(
    (state: any) => state.auth?.isAuthenticated
  )

  return (
    <NavigationContainer>
      {isUserAuthenticated ? (
        <>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="MyRewardScreen" component={MyRewardScreen} />
            <Tab.Screen
              name="PlannerDetailScreen"
              component={PlannerDetailScreen}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  )
}
