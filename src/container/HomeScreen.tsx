import { Header, PlannerCard } from "@/components"
import { Colors } from "@/constant/Color"
import * as React from "react"
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

type Props = {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <View>
      <Header />
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContain}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode={"stretch"}
          source={require("@assets/images/homeBackground.png")}
        >
          <Text style={styles.textName}>Hey Swara </Text>

          <View style={styles.itemCenter}>
            <Text style={styles.subtext}>Begin your healing journey</Text>

            <Image
              style={styles.groupAvatar}
              source={require("@assets/images/groupAvatar.png")}
            />
            <Text style={styles.completeText}>Completely confidential</Text>
          </View>

          <Pressable style={styles.findButton}>
            <Text style={styles.findTherapist}>Find my therapist</Text>
          </Pressable>
        </ImageBackground>
        <PlannerCard type="Morning" />
        <PlannerCard type="Morning" />
        <PlannerCard type="Evening" />
        <PlannerCard type="Evening" />
        <PlannerCard type="Afternoon" />
        <PlannerCard type="Afternoon" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: 325,
    width: "100%",
  },
  textName: {
    fontSize: 28,
    lineHeight: 35,
    color: Colors.TextColor,
    marginLeft: 20,
    marginBottom: 20,
    fontFamily: "Quicksand_600SemiBold",
  },
  findTherapist: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.WhiteColor,
    fontFamily: "Quicksand_700Bold",
    alignSelf: "center",
  },
  subtext: {
    fontSize: 20,
    lineHeight: 25,
    color: Colors.TextColor,
    fontFamily: "Quicksand_600SemiBold",
  },
  completeText: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.TextColor,
    fontFamily: "Quicksand_600SemiBold",
  },
  itemCenter: {
    alignItems: "center",
  },
  groupAvatar: { height: 100, width: 120, marginVertical: 20 },
  findButton: {
    height: 45,
    width: "60%",
    backgroundColor: Colors.PrimaryColor,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    borderRadius: 60,
    zIndex: 200,
    justifyContent: "center",
  },
  scrollContain: {
    paddingBottom: 50,
  },
})

export default HomeScreen
