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
function Header({title}) {
    const navigation = useNavigation();

  return (
    <View style={styles.header}>
    <View style={styles.backContainer}>

<TouchableOpacity onPress={()=>{
      navigation.navigate('Home')
    }}><Image source={require("../assets/arrow.png")} style={styles.arrow} /></TouchableOpacity>
      <Text style={styles.buttonText}>{title}</Text>
      </View>

</View>  )
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
})
export default Header