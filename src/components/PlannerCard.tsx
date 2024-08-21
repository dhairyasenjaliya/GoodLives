import { Colors } from "@/constant/Color"
import { checkTypeOfPlan } from "@/constant/Helper"
import { ExerciseInterface } from "@/mock"
import { HomeStackList } from "@/navigator"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
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

export type PlanType = "morning" | "afternoon" | "evening"

interface IconProps extends PressableProps {
  // Entire Data Object
  data: ExerciseInterface
}

export function PlannerCard(props: IconProps) {
  const { data } = props
  const { exerciseName, description, duration, coin, type, isCompleted } = data

  const navigation = useNavigation<StackNavigationProp<HomeStackList>>()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PlannerDetailScreen", { PlanDetail: data })
      }}
      style={styles.container}
    >
      <ImageBackground
        style={styles.backImage}
        source={checkTypeOfPlan(type)}
        resizeMode="contain"
      >
        {isCompleted && (
          <Icon
            icon="check"
            size={20}
            color={Colors.PrimaryColor}
            style={styles.checked}
          />
        )}
        <View style={styles.cardName}>
          <View>
            <Text style={styles.cardText} numberOfLines={1}>
              {exerciseName}
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
              {description}
            </Text>
          </View>
          <View style={styles.durationContain}>
            <Text style={styles.durationText} numberOfLines={1}>
              {duration}
            </Text>
            <View style={styles.iconContain}>
              <Icon icon="coin" size={25} />
              <Text style={styles.coinText} numberOfLines={1}>
                {coin}
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
  backImage: { height: 120, width: "100%", justifyContent: "center" },
  checked: {
    position: "absolute",
    left: Platform.OS === "android" ? 30 : 20,
    top: 30,
  },
  cardName: {
    height: 80,
    marginLeft: Platform.OS === "android" ? 80 : 60,
    marginRight: Platform.OS === "android" ? 120 : 100,
    justifyContent: "space-between",
  },
  cardText: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 18,
    color: Colors.TextColor,
  },
  iconContain: {
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "flex-end",
  },
  descriptionText: {
    fontFamily: "Quicksand_500Medium",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.TextColor,
  },
  durationContain: { flexDirection: "row", justifyContent: "space-between" },
  durationText: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 16,
    color: Colors.TextColor,
    width: "60%",
  },
  coinText: {
    fontFamily: "Quicksand_400Regular",
    fontSize: 16,
    marginLeft: 5,
  },
})
