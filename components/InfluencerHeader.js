import { View, FlatList, Text, StyleSheet, TouchableOpacity, ImageBackground,Button, Link, Image, ScrollView } from "react-native";
import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import { data } from "autoprefixer";
import data1 from './data';
//import { FlatList } from "react-native-web";
//import { Button } from "react-native-web";
const _handlePress=() =>{
  console.log('Pressed!');
}

const LinkButton = ({ label, onPress, underlineColor }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.link, { textDecorationColor: underlineColor }]}>{label}</Text>
  </TouchableOpacity>
);
const InfluencerHeader = () => {
  const [render,setisrender]=useState(false);
  const activepressed=() =>{
    setisrender(true);
     
}
const positivepressed=()=>{
  setisrender(false);
}
const negativepressed=()=>{
  setisrender(false);
}
  return (
    
    <View className="flex-1 bg-gray-600">
      <ImageBackground
        source={require("../assets/BG.jpg")}
        className="h-36 rounded-2xl opacity-95"
      >
        <Text className="text-white text-3xl ml-4 mt-6 font-bold">
          Andrew Tate
        </Text>
        <Text className="text-white text-xl ml-4 "># 37</Text>
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
      
      <View className="h-10 flex-row justify-between">
           
          <LinkButton label="Active Calls" onPress={()=>activepressed()} /> 
          <LinkButton label="Positive Calls" onPress={() => positivepressed()} />
          <LinkButton label="Negative Calls" onPress={() => negativepressed()} />

      </View>
      
      
       {render? <Cards/>: ""}
     <View/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  link: {
    marginTop:1,
    //marginBottom:530,
    fontSize:17,
    color: '#f8f8ff',
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
  underlink: {
    color: '#f0ffff',
    textDecorationLine: 'underline',
    //textDecorationLine: 'underline',
  },
});

export default InfluencerHeader;
