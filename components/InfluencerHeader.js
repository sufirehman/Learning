import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import React from "react";
import Cards from "./Cards";

const InfluencerHeader = () => {
  return (
    <View className="flex-1 bg-gray-600">
      <ImageBackground
        source={require("../assets/BG.jpg")}
        className="h-36 rounded-2xl opacity-95"
      >
        <Text className="text-white text-3xl ml-8 mt-4 font-bold">
          Mohib Rehman
        </Text>
        <Text className="text-white text-xl ml-8 "># 37</Text>
        <Image
          source={require("../assets/Channel-icon.jpg")}
          className="self-center rounded-md w-20 h-20 shadow-2xl "
          resizeMode="cover"
        />
      </ImageBackground>
      <View className=" h-28 flex-row justify-between">
        <View className=" flex-1 justify-center items-center">
          <View className="bg-white p-1 rounded-md my-1">
            <Text>Total Calls</Text>
          </View>
          <Text className="text-white font-semibold text-lg">119</Text>
        </View>
        <View className=" flex-1 justify-center items-center">
          <View className="bg-white p-1 rounded-md my-1">
            <Text>Active Calls</Text>
          </View>
          <Text className="text-white font-semibold text-lg">119</Text>
        </View>
      </View>
      <ScrollView>
        <Cards />
        <Cards />
      </ScrollView>
    </View>
  );
};

export default InfluencerHeader;
