import { Colors } from "@/constant/Color"
import { checkTypeOfPlan } from "@/constant/Helper"
import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import {
  ImageBackground,
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Icon } from "./Icon"

export type PlanType = "Morning" | "Afternoon" | "Evening"

interface IconProps extends PressableProps {
  title?: string
  type: PlanType
}

export function PlannerCard(props: IconProps) {
  const { type } = props
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PlannerDetailScreen")
      }}
      style={styles.container}
    >
      <ImageBackground
        style={{ height: 120, width: "100%", justifyContent: "center" }}
        source={checkTypeOfPlan(type)}
        resizeMode="contain"
      >
        <View
          style={{
            height: 80,
            marginLeft: Platform.OS === "android" ? 80 : 60,
            marginRight: Platform.OS === "android" ? 120 : 100,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 18,
                color: Colors.TextColor,
              }}
              numberOfLines={1}
            >
              Morning meditation 2
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand_500Medium",
                fontSize: 14,
                lineHeight: 20,
                color: Colors.TextColor,
              }}
              numberOfLines={1}
            >
              Affirmation for day
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontFamily: "Quicksand_600SemiBold",
                fontSize: 16,
                color: Colors.TextColor,
                width: "60%",
              }}
              numberOfLines={1}
            >
              6 min
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "40%",
                justifyContent: "flex-end",
              }}
            >
              <Icon icon="coin" size={25} />
              <Text
                style={{
                  fontFamily: "Quicksand_400Regular",
                  fontSize: 16,
                  marginLeft: 5,
                }}
                numberOfLines={1}
              >
                10
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
})
