import { Colors } from "@/constant/Color"
import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import { Pressable, PressableProps, StyleSheet, View } from "react-native"
import { Icon } from "./Icon"

interface IconProps extends PressableProps {
  title?: string // Pass props if needed
}

export function Header(props: IconProps) {
  const navigation = useNavigation()

  const commonSize = 30

  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        <Icon icon="drawer" size={commonSize} />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Icon icon="streak" size={commonSize} />
      </Pressable>
      <Pressable onPress={() => {}}>
        <Icon icon="coin" size={commonSize} />
      </Pressable>
      <Pressable onPress={() => {}}>
        <Icon icon="bell" size={commonSize} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: Colors.SecondaryColor,
    paddingBottom: 12,
  },
})
