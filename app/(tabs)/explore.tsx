import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import AppWrapper from "@/components/AppWrapper";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Users from "@/components/explore/Users";

const explore = () => {
  const { width, height } = Dimensions.get("window");
  const [inputData, setinputData] = useState<any>();
  const ref = useRef<any>();
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <AppWrapper>
      <View className="mx-auto mt-2 " style={{ width: width * 0.8 }}>
        <View className="flex flex-row items-center">
          <View className="flex-1 p-2  border-2 border-gray-300 rounded-lg  border-l-0 border-t-0 boder-b-0  border-r-0 flex flex-row gap-3 items-center">
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              ref={ref}
              placeholder="search your customer "
              className="p-1 flex-1"
              value={inputData}
              onChangeText={(text) => setinputData(text)}
            />
            <TouchableOpacity>
              <Entypo
                onPress={() => setinputData("")}
                name="cross"
                size={24}
                color="black"
                className="hidden"
                style={{
                  display: inputData ? "flex" : "none",
                }}
              />
            </TouchableOpacity>
          </View>
          <Ionicons name="filter" size={24} color="black" />
        </View>
      </View>
      <Users inputData={inputData} />
    </AppWrapper>
  );
};

export default explore;

const styles = StyleSheet.create({});
