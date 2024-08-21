import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

type Props = {}

const MyRewardScreen: React.FC<Props> = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.headerContain}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon icon="back" size={30} />
        </Pressable>
        <Text style={styles.headerText}>My Rewards</Text>
        <View style={styles.emptyHolder} />
      </View>
      <View style={styles.pageContain}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 0.5,
            }}
          >
            <Image
              style={styles.happyIcon}
              source={require("@assets/images/happyCoin.png")}
            />
            <Text>10</Text>
          </View>
          <Text style={styles.happinesCoin}> Happiness coins</Text>
        </View>

        <Image
          style={styles.coinBagIcon}
          source={require("@assets/images/coinBag.png")}
        />
      </View>
      <Pressable onPress={() => navigation.goBack()} style={styles.findButton}>
        <Text style={styles.findTherapist}>Go to Home</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContain: {
    height: 60,
    backgroundColor: Colors.SecondaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerText: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    flex: 1,
  },
  coinBagIcon: {
    height: 180,
    width: 180,
  },
  happyIcon: {
    height: 58,
    width: 58,
  },
  emptyHolder: {
    height: 30,
    width: 30,
  },
  pageContain: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  happinesCoin: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.TextColor,
    fontFamily: "Quicksand_700Bold",
    alignSelf: "center",
  },
  findButton: {
    height: 45,
    width: "60%",
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 60,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  findTherapist: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.WhiteColor,
    fontFamily: "Quicksand_700Bold",
    alignSelf: "center",
  },
})

export default MyRewardScreen
