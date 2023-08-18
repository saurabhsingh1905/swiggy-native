import { StyleSheet, Text, View,Pressable } from 'react-native'


import { Ionicons } from '@expo/vector-icons';

const Filter = () => {
  return (
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
    <Pressable  style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          width:120,
          justifyContent: "center",
        }}>
<Text style={{marginRight:6}}>Filter  </Text>
<Ionicons name="filter" size={20} color="black" />
</Pressable>
    <Pressable  style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          width:120,
          justifyContent: "center",
        }}>
<Text style={{marginRight:6}}>By Rating</Text>
</Pressable>
    <Pressable  style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 10,
          borderRadius: 20,
          width:120,
          justifyContent: "center",
        }}>
<Text style={{marginRight:6}}>By Price</Text>
</Pressable>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({})