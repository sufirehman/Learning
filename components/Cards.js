import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import {data} from "./data.js";
import {data1} from "./data.js";

    
const renderitem = ({item,index}) => {
    return (
      <LinearGradient
        colors={["#2D3034", "#414141"]}
        className="rounded-md my-0.5 mx-1 h-60"
      >
        <View className="flex-row justify-around">
          <View className="flex-1 justify-center items-start ml-8">
            <View className="flex-row mt-4">
              <Text className="text-white font-extrabold text-lg">
                {item.Name}
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-xl text-white font-bold">{item.coin}</Text>
              <Text className="text-xs text-white font-semibold mt-3">
                USDT
              </Text>
            </View>
            <View className="flex-row">
              <View className="bg-[#69C783] rounded-t-sm">
                <Text className="text-white font-semibold">
                  {item.calltime}
                </Text>
              </View>
              <Text className="text-white font-semibold px-2 align-super">
                | 10x 25x 50x 100x
              </Text>
            </View>
            <View>
              <Text className="font-semibold text-white">{item.Time}</Text>
            </View>
          </View>
          <View className="flex-1 justify-center item">
            <View className="justify-center bg-[#69C783] rounded-md my-3 w-24 h-10">
              <View className="bg-white justify-center items-start mx-4 rounded-sm">
                <>
                  <Text className="self-center font-semibold">
                    {item.calltype}
                  </Text>
                </>
              </View>
              <View>
                <Text className="self-center  font-semibold">
                  {item.buyvalue}
                </Text>
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

            <Text className="text-black font-semibold">{item.title}</Text>
          </View>
          <View className="bg-white mt-3 flex-row rounded-md p-2 self-start">
            <Text className="text-black font-semibold mx-1">Stop Loss</Text>
            <Text className="text-black ">{item.stoploss}</Text>
          </View>
        </View>
      </LinearGradient>
    );
}

const Cards = () => {
  //const jsonData = require('./data');
    return <FlatList data={data} renderItem={renderitem} />;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 30,
    //marginBottom:500,
  },
});

export default Cards;