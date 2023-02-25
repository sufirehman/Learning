import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
const Cards = () => {
  return (
    <LinearGradient
      colors={["#2D3034", "#414141"]}
      className="rounded-md mx-5 h-60"
    >
      <View className="flex-row justify-around">
        <View className="flex-1 justify-center items-start ml-8">
          <View className="flex-row mt-4">
            <Text className="text-white font-extrabold text-lg">
              Mohib Rehman
            </Text>
          </View>
          <View className="flex-row">
            <Text className="text-xl text-white font-bold">ETH</Text>
            <Text className="text-xs text-white font-semibold mt-3">USDT</Text>
          </View>
          <View className="flex-row">
            <View className="bg-[#69C783] rounded-t-sm">
              <Text className="text-white font-semibold">LONG</Text>
            </View>
            <Text className="text-white font-semibold px-2 align-super">
              | 10x 25x 50x 100x
            </Text>
          </View>
          <View>
            <Text className="font-semibold text-white">5d 3h 12m ago</Text>
          </View>
        </View>
        <View className="flex-1 justify-center item">
          <View className="justify-center bg-[#69C783] rounded-md my-3 w-28 h-8 p-5">
            <View className="bg-white justify-center items-start mx-4 rounded-sm">
              <>
                <Text className="self-center font-semibold">BUY</Text>
              </>
            </View>
            <View>
              <Text className="self-center  font-semibold"> $1440.2</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 mx-8">
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
            width: "60%",
            marginVertical: 10,
          }}
        />
        <View className="bg-white mt-3 flex-row rounded-md p-2 self-start">
          <Text className="text-black font-semibold mx-1">Targets </Text>
          <Text className="text-black font-semibold">
            1.2 23.4 23 1.2 23.4 23 1.2 23.4 23
          </Text>
        </View>
        <View className="bg-white mt-3 flex-row rounded-md p-2 self-start">
          <Text className="text-black font-semibold mx-1">Stop Loss</Text>
          <Text className="text-black ">2.3</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 30,
  },
});

export default Cards;
