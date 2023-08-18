import {  Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels"
import { Ionicons } from '@expo/vector-icons';
import Filter from "../components/Filter";
import MenuItem from "../components/MenuItem";


const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop:45}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderColor:"#C0C0C0",
          borderRadius:7
        
        }}
      >
        <TextInput placeholder="Search for restaurent item or more" style={{fontSize:15}} />
        <AntDesign name="search1" size={24} color="#E52850" />
      </View>

      <Carousel/>
      <FoodTypes/>
      <QuickFood/>

      {/* filter buttons */}
      <Filter />

{hotels.map((item,index)=> (
<MenuItem key={index} item={item} />
))}

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
