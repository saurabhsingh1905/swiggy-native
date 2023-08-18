import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuItem = ({item}) => {
  return (
    <View>
     
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}
          ></ImageBackground>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})