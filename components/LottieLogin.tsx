import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const LoginLottie = () => {
  const animation = useRef(null);
  const colorSchem = useColorScheme();
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <View className=" flex-1">
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
          margin: "auto",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={
          colorSchem === "dark"
            ? require("../assets/anim/dar_two.json")
            : require("../assets/anim/animtwo.json")
        }
      />
    </View>
  );
};

export default LoginLottie;

const styles = StyleSheet.create({});
