import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import * as React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

type Props = {}

const MyRewardScreen: React.FC<Props> = () => {
  return (
    <View>
      <View
        style={{
          height: 60,
          backgroundColor: Colors.SecondaryColor,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          style={{ position: "absolute", left: 10 }}
          icon="back"
          size={30}
        />
        <Text
          style={{
            fontFamily: "Quicksand_600SemiBold",
            fontSize: 24,
            lineHeight: 30,
            textAlign: "center",
            flex: 1,
          }}
        >
          My Rewards
        </Text>
      </View>
      <Image
        style={styles.coinBag}
        source={require("@assets/images/coinBag.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  coinBag: {
    height: 180,
    width: 180,
  },
})

export default MyRewardScreen
