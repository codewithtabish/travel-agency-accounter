import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

const _layout = () => {
  const colorSchem = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorSchem === "dark" ? "#212529" : "#ffffff",
          borderTopColor: "#ccc",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: colorSchem == "dark" ? "white" : "black",

          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <Entypo
                    name="home"
                    size={24}
                    color={colorSchem == "dark" ? "#ffffff" : "#030303"}
                  />
                ) : (
                  <AntDesign
                    name="home"
                    size={24}
                    color={colorSchem == "dark" ? "#FFFDD0" : "#cccccc"}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarActiveTintColor: colorSchem == "dark" ? "white" : "black",

          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <FontAwesome
                    name="wpexplorer"
                    size={24}
                    color={colorSchem == "dark" ? "#ffffff" : "#030303"}
                  />
                ) : (
                  <FontAwesome
                    name="wpexplorer"
                    size={24}
                    color={colorSchem == "dark" ? "#FFFDD0" : "#cccccc"}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="command"
        options={{
          tabBarLabel: "Command",
          tabBarActiveTintColor: colorSchem == "dark" ? "white" : "black",

          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <Feather
                    name="command"
                    size={24}
                    color={colorSchem == "dark" ? "#ffffff" : "#030303"}
                  />
                ) : (
                  <Feather
                    name="command"
                    size={24}
                    color={colorSchem == "dark" ? "#FFFDD0" : "#cccccc"}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: colorSchem == "dark" ? "white" : "black",

          tabBarIcon: ({ color, focused }) => {
            return (
              <>
                {focused ? (
                  <MaterialIcons
                    name="person-3"
                    size={24}
                    color={colorSchem == "dark" ? "#ffffff" : "#030303"}
                  />
                ) : (
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color={colorSchem == "dark" ? "#FFFDD0" : "#cccccc"}
                  />
                )}
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
