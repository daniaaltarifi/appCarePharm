import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { useRoute } from '@react-navigation/native';
function NewsDetails() {
    const navigation = useNavigation();
const route=useRoute();
const {newsTitle,newsSummary,newsDesc,image}=route.params
  return (
    <ScrollView>
<View>
<View style={styles.header}>
        <View style={styles.backContainer}>

    <TouchableOpacity onPress={()=>{
          navigation.navigate('MedicinesNews')
        }}><Image source={require("../assets/arrow.png")} style={styles.arrow} /></TouchableOpacity>
          <Text style={styles.buttonText}>Medicines News</Text>
          </View>

    </View>
    <Image source={{uri:image}} style={styles.news_img}></Image>
    <Text style={styles.title}>{newsTitle}</Text>
    <Text style={styles.paragraph}>{newsDesc}</Text>
    </View> 
    </ScrollView>
     )
}
const styles=StyleSheet.create({
    header: {
        // flexDirection: "row", // Arrange the image and text in a row
        // alignItems: "center", // Align items vertically in the center
        backgroundColor: "#6082AB",
        height: 65,
        width: 500,
        marginTop: 30,
    
      },
      backContainer: {
        flexDirection: "row", // Arrange the arrow and text in a row
        alignItems: "center", // Align items vertically
        marginTop: 18,
      },
      arrow: {
        marginRight: 10, // Add some spacing between the arrow and text
        marginLeft: 20,
      },
      buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight:"bold"
      },
      img:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop:15,

      },
      title:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:15

      },
      paragraph:{
        fontSize:15,
        marginTop:10,
        marginLeft:15,

      },
      news_img: {
        height: 350,
        width: 350,
      },
})
export default NewsDetails