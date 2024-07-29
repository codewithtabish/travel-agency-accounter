import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AppWrapper from "./AppWrapper";

const Stacks = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
