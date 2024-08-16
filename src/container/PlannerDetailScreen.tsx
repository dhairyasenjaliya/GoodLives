import { Icon } from "@/components"
import { Colors } from "@/constant/Color"
import Slider from "@react-native-community/slider"
import { Audio } from "expo-av"
import * as FileSystem from "expo-file-system"
import * as Sharing from "expo-sharing"
import React, { useEffect, useRef, useState } from "react"
import {
  Image,
  InteractionManager,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"

const PlannerDetailScreen = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const interactionRef = useRef<any>(null)

  const handleShare = async () => {
    const fileUri = FileSystem.cacheDirectory + "RelaxMusic.mp3"
    await FileSystem.writeAsStringAsync(
      fileUri,
      "Hello, this is a test message!"
    )

    // Check if sharing is available
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available on this device")
      return
    }

    // Share the file
    await Sharing.shareAsync(fileUri, {
      mimeType: "text/plain",
      dialogTitle: "Share this file",
    })
  }

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync()
      }
      if (interactionRef.current) {
        InteractionManager.clearInteractionHandle(interactionRef.current)
      }
    }
  }, [sound])

  const loadSound = async () => {
    const { sound: newSound, status } = await Audio.Sound.createAsync(
      require("@assets/audio/relaxMusic.mp3"),
      { shouldPlay: true }
    )
    setSound(newSound)
    setDuration(status.durationMillis || 0)
    setIsPlaying(true)

    newSound.setOnPlaybackStatusUpdate(status => {
      if (status.isLoaded) {
        if (interactionRef.current) {
          InteractionManager.clearInteractionHandle(interactionRef.current)
        }
        interactionRef.current = InteractionManager.runAfterInteractions(() => {
          setPosition(status.positionMillis || 0)
          setIsPlaying(status.isPlaying)
        })
      }
    })
  }

  const playPauseSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync()
      } else {
        await sound.playAsync()
      }
      setIsPlaying(!isPlaying)
    } else {
      await loadSound()
    }
  }

  const seekSound = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value)
    }
  }

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 1000 / 60)
    const seconds = Math.floor(millis / 1000) % 60
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const currentMinute = formatTime(position)
  const escapeMinute = formatTime(duration - position)

  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/relaxBear.png")}
        style={{ height: 160, width: 160 }}
        resizeMode="contain"
      />

      <View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onSlidingComplete={seekSound}
          minimumTrackTintColor={Colors.TextColor}
          maximumTrackTintColor={Colors.Grey}
          thumbTintColor={Colors.TextColor}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "Quicksand_500Medium",
              fontSize: 16,
              color: Colors.TextColor,
            }}
          >
            {currentMinute}
          </Text>
          <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}>
            {escapeMinute}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 100,
            // backgroundColor: "red",
          }}
        >
          <Icon icon="backward" size={30} />
          <Pressable
            style={{
              backgroundColor: Colors.SecondaryColor,
              height: 45,
              width: 45,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={playPauseSound}
          >
            <Icon icon={isPlaying ? "pause" : "play"} size={30} />
          </Pressable>
          <Icon icon="forward" size={30} />
        </View>
        <Icon
          onPress={handleShare}
          style={{ position: "absolute", right: 0 }}
          icon="share"
          size={25}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    width: 350,
    height: 40,
  },
})

export default PlannerDetailScreen
