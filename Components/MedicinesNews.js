// import React, { useState,useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Header from './Header.js'
// import axios from "axios";
// function MedicinesNews() {
//     const navigation = useNavigation();
//     const [news,setNews]=useState("")
//     useEffect(()=>{
//       const goForAxios = () => {

//         axios.get("http://192.168.68.108:5000/news")
//             .then(response => {
//                 // console.log('getting data from axios', response.data);
//           setNews(response.data)
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
//     goForAxios()

//     },[])
//   return (
//     <ScrollView>

//   <View>
//     {/* <View style={styles.header}>
//         <View style={styles.backContainer}>

//     <TouchableOpacity onPress={()=>{
//           navigation.navigate('Home')
//         }}><Image source={require("../assets/arrow.png")} style={styles.arrow} /></TouchableOpacity>
//           <Text style={styles.buttonText}>Medicines News</Text>
//           </View>

//     </View> */}
//     <Header title="Medicines News"/>
//     {news && news.map((news) => (

//     <TouchableOpacity onPress={()=>{navigation.navigate('NewsDetails',{newsTitle:news.title,newsSummary:news.summary,newsDesc:news.description})}} key={news._id}>

//     <View style={styles.box_card}key={news._id} >
//         <View style={styles.img_text}>
// <Image source={require('../assets/newsimg.png')} style={styles.img_news}></Image>
// <View style={styles.container_text}>
// <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text} >{news.title}</Text>
// <Text numberOfLines={2} ellipsizeMode="tail" style={styles.summary}>
//   {news.summary}
// </Text>

// </View>
// </View>
//   </View>
//   </TouchableOpacity>
//     ))}

//   </View>
//   </ScrollView>

//   );
// }
// const styles = StyleSheet.create({
//     header: {
//         // flexDirection: "row", // Arrange the image and text in a row
//         // alignItems: "center", // Align items vertically in the center
//         backgroundColor: "#6082AB",
//         height: 65,
//         width: 500,
//         marginTop: 30,

//       },
//       backContainer: {
//         flexDirection: "row", // Arrange the arrow and text in a row
//         alignItems: "center", // Align items vertically
//         marginTop: 18,
//       },
//       arrow: {
//         marginRight: 10, // Add some spacing between the arrow and text
//         marginLeft: 20,
//       },
//       buttonText: {
//         color: "#fff",
//         fontSize: 20,
//         fontWeight:"bold"
//       },
//       box_card:{
//         height:150,
//         width:343,
//         backgroundColor:"#fff",
//         borderRadius:20,
//         marginLeft:10,
//         marginTop:10
//       },
//       img_text:{
//         flexDirection:"row",
//         marginTop:30,
//         alignItems:"center"
//       },
//       img_news:{
//         marginTop:15
//       },
//       text:{
//         // marginTop:10,
//         fontWeight:"bold",
//         fontSize:15,
//         width:250
//       },
//       container_text:{
//         marginLeft:10
//       },
//       summary:{
// width:250      }
// });
// export default MedicinesNews;
import React, { useEffect, useState } from "react";
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
import MedicineData from "../Data/MedicinesData.js";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header.js";
import axios from "axios";
function MedicinesNews() {
  const navigation = useNavigation();
  const [news, setNews] = useState();
  useEffect(() => {
    const goForAxios = () => {
      axios
        .get("http://192.168.68.107:5000/news")
        .then((response) => {
          // console.log('getting data from axios', response.data);
          setNews(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    goForAxios();
  }, []);

  return (
    <ScrollView>
      <View>
        <Header title="Medicines News" />
        {news &&
          news.map((news) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NewsDetails", {
                  image:news.avatar,
                  newsTitle: news.title,
                  newsSummary: news.summary,
                  newsDesc: news.description,
                });
              }}
              key={news._id}
            >
              <View style={styles.box_card}>
                <View style={styles.img_text}>
                  <Image
                    source={{ uri: news.avatar }} // Use uri to load the image from a URL
                    style={styles.medicine_img}
                  />
                  <View style={styles.container_text}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.text}
                    >
                      {news.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.summary}
                    >
                      {news.summary}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    // flexDirection: "row", // Arrange the image and text in a row
    // alignItems: "center", // Align items vertically in the center
    backgroundColor: "#6082AB",
    height: 120,
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
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 290,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 35,
    paddingLeft: 15,
  },
  box_card: {
    height: 150,
    width: 343,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  img_text: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  medicine_img: {
    height: 70,
    width: 70,
    marginLeft: 30,
    marginRight: 20,
  },
  medicine_container: {
    flexDirection: "row",
    marginTop: 40,
  },
  text_medicine: {
    marginTop: 13,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  text_container: {
    width: 180,
  },
  text_desc: {
    marginLeft: 10,
  },
  text: {
    // marginTop:10,
    fontWeight: "bold",
    fontSize: 15,
    width: 250,
  },
  summary: {
    width: 250,
  },
});
export default MedicinesNews;
