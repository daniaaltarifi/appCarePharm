import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logoMedicine.png")}
          style={styles.logo}
        />
        <Text style={styles.carePharm}>CarePharm</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.slogan}>We take care of your health </Text>

        <Image
          source={require("../assets/slogan.png")}
          style={styles.slogan_img}
        ></Image>
      </View>
      <Text style={styles.serviceTitle}>Our Services</Text>
      <View style={styles.ourServices}>
      <TouchableOpacity onPress={() => {
  navigation.navigate("Medicines");
}}>
  <View style={styles.servicesContainer}>
    <Image
      source={require("../assets/medicines.png")}
      style={styles.medcine_img}
    ></Image>
    <Text style={styles.text_service}>Medicine</Text>
  </View>
</TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('MedicinesNews')}}>
          <View style={styles.servicesContainer}>
            <Image
              source={require("../assets/news.jpeg")}
              style={styles.news_img}
            ></Image>
            <Text style={styles.text_service}>News</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Pharmacy')}}>
          <View style={styles.servicesContainer}>
            <Image
              source={require("../assets/pharmacy.jpeg")}
              style={styles.pharmacy_img}
            ></Image>
            <Text style={styles.text_service}>Pharmacy</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[styles.serviceTitle, styles.pharmacy_title]}>
        Top Pharmacy
      </Text>
      <View style={styles.pharmacy}>
        <Image
          source={require("../assets/TopPharmacy.jpeg")}
          style={styles.topPharmacy_Img}
        ></Image>
         <View style={styles.textContainer}>
    <Text style={styles.text_pharmacy}>PharmacyOne</Text>
    <View style={styles.row_rating}>
<Image source={require('../assets/rate.png')} style={styles.rating}></Image>
    <Text>4.9(37 Reviews)</Text>

    </View>
  </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // You can set your desired background color
  },
  header: {
    flexDirection: "row", // Arrange the image and text in a row
    alignItems: "center", // Align items vertically in the center
    backgroundColor: "#6082AB",
    height: 70,
    width: 500,
    marginTop: 30,
  },
  carePharm: {
    color: "#fff",
    fontSize: 25,
    marginTop: 10,
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 10, // Add some spacing between the image and text
    marginLeft: 80,
  },
  slide: {
    backgroundColor: "#C8D8DE",
    height: 150,
    borderRadius: 30,
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  slogan: {
    color: "#0157C8",
    fontSize: 15,
    marginLeft: 20,
    paddingRight: 20,
  },
  slogan_img: {
    height: 80,
    width: 80,
  },
  serviceTitle: {
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  ourServices: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 15,
  },
  servicesContainer: {
    backgroundColor: "#C8D8DE",
    height: 90,
    width: 90,
    borderRadius: 15,
    marginBottom:30,

  },
  medcine_img: {
    height: 70,
    width: 70,
    margin: 10,
    marginBottom:20,
  },
  text_service:{
    textAlign:"center",
    fontWeight:"bold"
  },
  news_img: {
    height: 68,
    width: 50,
    marginLeft: 20,
    marginTop: 10,
    marginBottom:20,

  },
  pharmacy_img: {
    height: 60,
    width: 65,
    marginLeft: 14,
    marginTop: 15,
    marginBottom:20,

  },
  pharmacy_title: {
    marginTop: 50,
  },
  pharmacy: {
    backgroundColor: "#FAFAFA",
    height: 80,
    width: 500,
    marginTop: 20,
    flexDirection:"row",
    alignItems:"center"
  },
  topPharmacy_Img: {
    height: 80,
    width: 80,
    marginLeft: 30,
    
  },
  textContainer: {
    flexDirection: "column", // This will make the text stack vertically
    marginLeft: 10, // Adjust the margin as needed
    marginLeft:30
  },
  text_pharmacy:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:8
  },
  row_rating:{
    flexDirection:"row"
  },
  rating:{
height:15,
width:15  }
});

export default Home;
