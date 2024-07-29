import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppWrapper from "@/components/AppWrapper";
import { useAuth } from "@clerk/clerk-expo";

const profile = () => {
  const { signOut } = useAuth();

  return (
    <AppWrapper>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum enim
        assumenda quis? Nesciunt libero alias fugiat aperiam blanditiis! Aliquam
        quia similique delectus, quidem blanditiis quibusdam aperiam suscipit id
        nostrum pariatur.
      </Text>
      <TouchableOpacity className="bg-red-300 p-3" onPress={() => signOut()}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </AppWrapper>
  );
};

export default profile;

const styles = StyleSheet.create({});
