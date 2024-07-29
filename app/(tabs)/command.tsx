import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { galileoCommands } from "@/constants/data";
import AppWrapper from "@/components/AppWrapper";
import * as Clipboard from "expo-clipboard";

const Command = () => {
  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
    ToastAndroid.show(`${text} copied`, ToastAndroid.SHORT);
  };
  const CommandItem = ({ item }: any) => {
    return (
      <View className="my-2 border-2 border-gray-200 p-2 rounded-lg shadow-lg">
        <TouchableOpacity className="my-1">
          <Text className=" text-xl" style={{ fontFamily: "outfit-medium" }}>
            {item?.title}
          </Text>
          <Text className="text-gray-800 my-1">{item?.description}</Text>
        </TouchableOpacity>
        <View className="bg-gray-700 h-14 p-2 flex flex-row items-center rounded-lg">
          <Text className="text-white flex-1">{item?.command}</Text>
          <View className="mx-3 bg-gra">
            <TouchableOpacity
              className="p-1"
              onPress={() => copyToClipboard(item.command)}
            >
              <Text className="text-white">Copy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <AppWrapper>
      <View className="mx-4">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={galileoCommands}
          renderItem={CommandItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </AppWrapper>
  );
};

export default Command;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  commandItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  commandTitle: {
    flex: 1,
    fontSize: 16,
  },
  copyButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  copyButtonText: {
    color: "white",
    fontSize: 16,
  },
});
