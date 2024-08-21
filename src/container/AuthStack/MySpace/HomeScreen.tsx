import { Header, PlannerCard } from "@/components"
import { Colors } from "@/constant/Color"
import { checkEmptyObject } from "@/constant/Helper"
import { dailyExercisePlanMock, ExerciseInterface } from "@/mock"
import { FetchListOfPlan } from "@/store/actions/dailyPlanAction"
import * as React from "react"
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"

type Props = {}

const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const GivenName = useSelector(
    (state: any) => state.auth?.user?.user?.givenName || ""
  )

  const DailyPlan: [] = useSelector(
    (state: any) => state?.dailyPlan?.dailyExercisePlan || []
  )

  React.useEffect(() => {
    // Here we can daily fetch latest list with completion status from API
    if (!checkEmptyObject(DailyPlan)) {
      dispatch(FetchListOfPlan(dailyExercisePlanMock))
    }
  }, [])

  return (
    <View>
      <Header />
      <ScrollView
        nestedScrollEnabled
        bounces={false}
        contentContainerStyle={styles.scrollContain}
      >
        <ImageBackground
          style={styles.imageBackground}
          resizeMode={"stretch"}
          source={require("@assets/images/homeBackground.png")}
        >
          <Text style={styles.textName}>Hey, {GivenName} </Text>

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

        <FlatList
          data={DailyPlan}
          renderItem={(data: { item: ExerciseInterface }) => {
            return <PlannerCard data={data?.item} />
          }}
          keyExtractor={item => item?.id.toString()}
          scrollEnabled={false}
        />
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
