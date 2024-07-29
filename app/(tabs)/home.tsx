import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";

const home = () => {
  const colorSheme = useColorScheme();
  return (
    <AppWrapper>
      <Text
        className={`${
          colorSheme === "dark" ? "text-dark-text-dark-dark" : "text-primary"
        } text-2xl 
         `}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum
        corrupti repellat. Soluta mollitia natus molestias cumque quis delectus,
        libero at illo, labore dolore incidunt enim? Nemo sed dignissimos
        facere.
      </Text>
    </AppWrapper>
  );
};

export default home;

const styles = StyleSheet.create({});
