import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import quickfood from "../data/quickfood";
import { MaterialIcons } from '@expo/vector-icons';

const QuickFood = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500" }}>QuickFood</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quickfood.map((item, index) => (
          <Pressable key={index} style={{ margin: 10 }}>
            <ImageBackground
              source={{ uri: item.image }}
              style={{ aspectRatio: 6 / 8, height: 170 }}
              imageStyle={{ borderRadius: 6 }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: 10,
                  fontSize: 28,
                  fontWeight: "900",
                  color: "white",
                }}
              >
                {item.offer} Off
              </Text>
            </ImageBackground>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {item.name.substring(0, 16)}...
            </Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:3}}>
            <MaterialIcons name="stars" size={20} color="green" />
            <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.rating} </Text>
            <Text style={{marginLeft:2,}}>-</Text>
            <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.time} mins</Text>
            </View>
          
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
