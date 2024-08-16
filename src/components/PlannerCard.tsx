import { Colors } from "@/constant/Color"
import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import {
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Icon } from "./Icon"

interface IconProps extends PressableProps {
  title?: string // Pass props if needed
}

export function PlannerCard(props: IconProps) {
  const navigation = useNavigation()

  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={{ height: 120, width: "100%", justifyContent: "center" }}
        source={require("@assets/images/morningCard.png")}
        resizeMode="contain"
      >
        <View
          style={{
            height: 80,
            marginLeft: 60,
            marginRight: 100,
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
              }}
            >
              6 min
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon icon="coin" size={25} />
              <Text
                style={{
                  fontFamily: "Quicksand_400Regular",
                  fontSize: 16,
                  marginLeft: 5,
                }}
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
  },
})
