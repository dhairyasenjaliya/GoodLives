import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import EventScreen from "@/container/AuthStack/Events"
import HomeScreen from "@/container/AuthStack/MySpace/HomeScreen"
import MyRewardScreen from "@/container/AuthStack/MySpace/MyRewardScreen"
import PlannerDetailScreen from "@/container/AuthStack/MySpace/PlannerDetailScreen"
import SupportGroupScreen from "@/container/AuthStack/SupportGroup"
import WellnessLibrary from "@/container/AuthStack/WellnessLibrary"
import LoginScreen from "@/container/UnAuthStack/LoginScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { useSelector } from "react-redux"

// When Auth State is Null
export type UnAuthStackParamList = {
  LoginScreen: undefined
}

// When Auth State is Logged-In
export type AppStackParamList = {
  HomeStack: undefined
  EventStack: undefined
  SupportStack: undefined
  WellnessStack: undefined
}

// HomeStack with nested screens
export type HomeStackList = {
  HomeScreen: undefined
  MyRewardScreen: undefined
  PlannerDetailScreen: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>

//Main Tab Screens
const Tab = createBottomTabNavigator<AppStackParamList>()

// UnAuth State Screens
const UnAuthStack = createNativeStackNavigator<UnAuthStackParamList>()

const HomeStack = createNativeStackNavigator<HomeStackList>()

const HomeScreenStack: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="MyRewardScreen" component={MyRewardScreen} />
      <HomeStack.Screen
        name="PlannerDetailScreen"
        component={PlannerDetailScreen}
      />
    </HomeStack.Navigator>
  )
}

export default function Navigator() {
  const isUserAuthenticated = useSelector(
    (state: any) => state.auth?.isAuthenticated
  )

  return (
    <NavigationContainer>
      {isUserAuthenticated ? (
        <>
          <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
              headerShown: false,
              tabBarStyle: styles.mainTabContain,
            }}
          >
            <Tab.Screen
              name="HomeStack"
              component={HomeScreenStack}
              options={({}) => ({
                tabBarIcon: ({ focused }) => (
                  <>
                    {focused ? (
                      <View style={styles.focusedViewContain}>
                        <View style={styles.iconContain}>
                          <Icon icon="tab1" size={26} />
                        </View>
                        <View style={styles.tabTitleContain} />
                        <Text style={styles.tabTitle}>My Space</Text>
                      </View>
                    ) : (
                      <>
                        <Icon icon="tab1" size={28} color={Colors.TextColor} />
                      </>
                    )}
                  </>
                ),
                tabBarLabel: () => null,
              })}
            />
            <Tab.Screen
              name="EventStack"
              component={EventScreen}
              options={({}) => ({
                tabBarIcon: ({ focused }) => (
                  <>
                    {focused ? (
                      <View style={styles.focusedViewContain}>
                        <View style={styles.iconContain}>
                          <Icon
                            icon="tab2"
                            size={28}
                            color={Colors.WhiteColor}
                          />
                        </View>
                        <View style={styles.tabTitleContain} />
                        <Text style={styles.tabTitle}>Events</Text>
                      </View>
                    ) : (
                      <>
                        <Icon icon="tab2" size={28} color={Colors.TextColor} />
                      </>
                    )}
                  </>
                ),
                tabBarLabel: () => null,
              })}
            />
            <Tab.Screen
              name="SupportStack"
              component={SupportGroupScreen}
              options={({}) => ({
                tabBarIcon: ({ focused }) => (
                  <>
                    {focused ? (
                      <View style={styles.focusedViewContain}>
                        <View style={styles.iconContain}>
                          <Icon
                            icon="tab3"
                            color={Colors.WhiteColor}
                            size={26}
                          />
                        </View>
                        <View style={styles.tabTitleContain} />
                        <Text style={styles.tabTitle}>Support Group</Text>
                      </View>
                    ) : (
                      <>
                        <Icon icon="tab3" size={28} color={Colors.TextColor} />
                      </>
                    )}
                  </>
                ),
                tabBarLabel: () => null,
              })}
            />
            <Tab.Screen
              name="WellnessStack"
              component={WellnessLibrary}
              options={({}) => ({
                tabBarIcon: ({ focused }) => (
                  <>
                    {focused ? (
                      <View style={styles.focusedViewContain}>
                        <View style={styles.iconContainLast}>
                          <Icon
                            icon="tab4"
                            color={Colors.WhiteColor}
                            size={26}
                          />
                        </View>
                        <View style={styles.tabTitleContainLast} />
                        <Text style={styles.tabTitle}>Wellness Library</Text>
                      </View>
                    ) : (
                      <>
                        <Icon icon="tab4" size={28} color={Colors.TextColor} />
                      </>
                    )}
                  </>
                ),
                tabBarLabel: () => null,
              })}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <UnAuthStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LoginScreen"
          >
            <UnAuthStack.Screen name="LoginScreen" component={LoginScreen} />
          </UnAuthStack.Navigator>
        </>
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  mainTabContain: {
    height: 85,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingBottom: 20,
  },
  focusedViewContain: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContain: {
    backgroundColor: Colors.PrimaryColor,
    height: 35,
    width: 35,
    marginLeft: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  tabTitleContain: {
    backgroundColor: Colors.PrimaryColor,
    height: 7,
    width: 35,
    position: "absolute",
    bottom: -15,
    left: 35,
    borderRadius: 32,
  },

  tabTitle: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 16,
    color: Colors.TextColor,
  },

  iconContainLast: {
    backgroundColor: Colors.PrimaryColor,
    height: 35,
    width: 35,
    marginLeft: -20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  tabTitleContainLast: {
    backgroundColor: Colors.PrimaryColor,
    height: 7,
    width: 35,
    position: "absolute",
    bottom: -15,
    left: -20,
    borderRadius: 32,
  },
})
