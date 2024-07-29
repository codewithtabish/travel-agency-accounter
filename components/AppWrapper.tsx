import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import Stacks from "./Stacks";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

const AppWrapper = ({ children }: any) => {
  const colorSchem = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View
          className={`flex-1 ${
            colorSchem === "dark"
              ? "bg-dark-bg-dark-primary"
              : "bg-light-bg-primary"
          }`}
        >
          <PaperProvider theme={theme}>{children}</PaperProvider>
        </View>
        <StatusBar
          barStyle={colorSchem == "dark" ? "light-content" : "dark-content"}
          backgroundColor={colorSchem == "dark" ? "#212529" : "#ffffff"}
        />
      </SafeAreaView>
      {/* <StatusBar barStyle={"light-content"} backgroundColor={Colors.primary} /> */}
    </SafeAreaProvider>
  );
};

export default AppWrapper;
