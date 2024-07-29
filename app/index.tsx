import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";
import First from "@/components/First";
import { Redirect } from "expo-router";

const AppRootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <>
      <Redirect href={"/home"} />
    </>
  );

  //   return (
  //     <AppWrapper>
  //       <First />
  //       <Text
  //         style={{ color: colorScheme === "dark" ? "white" : "black" }}
  //         className="text-3xl text-red-500"
  //       >
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam,
  //         necessitatibus ut nostrum quas rem quidem, similique, fuga quod quisquam
  //         libero error provident nobis at a quos? Qui, architecto saepe.
  //       </Text>
  //     </AppWrapper>
  //   );
};

export default AppRootLayout;

const styles = StyleSheet.create({});
