import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { users } from "@/constants/data";

const Users = ({ inputData }: any) => {
  const [allUsers, setusers] = useState<any>(users);

  useEffect(() => {
    if (inputData) {
      setusers(
        users.filter((user: any) =>
          user.name.toLowerCase().includes(inputData.toLowerCase())
        )
      );
    } else {
      setusers(users);
    }
  }, [inputData]);

  const UserItem = ({ item }: any) => {
    return (
      <TouchableOpacity className="mx-4 my-2">
        <View className="flex flex-row  items-center gap-4 ">
          <View>
            <Image src={item?.image} className="w-12 h-12" />
          </View>
          <View className="flex-1 flex-row">
            <View className="flex-1">
              <Text className="" style={{ fontFamily: "outfit-bold" }}>
                {item?.name}
              </Text>
              <Text
                className={` font-bold
                ${item?.profit ? "text-green-400" : "text-red-400"}`}
              >{`+ ${item?.amount} `}</Text>
            </View>

            <View className="mr-2 ">
              <Text
                className=""
                style={{ fontFamily: "outfit-medium" }}
              >{`${item?.percent} %`}</Text>
            </View>
          </View>
        </View>
        <View
          className=" mt-2 rounded-lg w-full border-gray-300"
          style={{ borderWidth: 1 }}
        ></View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={allUsers}
        renderItem={UserItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
