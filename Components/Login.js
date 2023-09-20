import React from 'react'
import { useNavigation } from "@react-navigation/native";

import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
  } from "react-native";
function Login() {
    const navigation = useNavigation();

  return (
    <View>
    <View style={styles.miniCircle}>
    <View style={styles.back}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("SignUp");
        }}>
          <View style={styles.backContainer}>
            <Image source={require('../assets/arrow.png')} style={styles.arrow} />
            <Text style={styles.buttonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
  </View>
      <View style={styles.backgroundContainer}>
        <View style={styles.margin_box}>
        <Text style={styles.account}>Login</Text>
      
      <Text style={styles.title}>Email</Text>
      <TextInput
        style={[styles.textInput,styles.marginInput]}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={[styles.textInput,styles.marginInput]}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
    
    <TouchableOpacity style={styles.signupButton}  onPress={()=>{
        navigation.navigate("Home");
      }}>
        <Text style={styles.signupText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.haveAccount} onPress={()=>{navigation.navigate("SignUp")}}>Don`t have an account ? </Text>
      <Text style={styles.haveAccount} onPress={()=>{navigation.navigate("SignUp")}}>SignUp ? </Text>

      </View>
      </View>
      
  </View>
  )
}
const styles = StyleSheet.create({
    miniCircle:{
        height:150,
        width:150,
        borderBottomRightRadius:90,
        backgroundColor:"#A1C0CD",
        marginTop:30,

    },
    back: {
        flex: 1,
        margin: 50,
        alignItems: "center", // Center the content horizontally
      },
      backContainer: {
        flexDirection: "row", // Arrange the arrow and text in a row
        alignItems: "center", // Align items vertically
        
      },
      arrow: {
        marginRight: 10, // Add some spacing between the arrow and text
      },
      buttonText: {
        fontSize: 18, // You can adjust the font size as needed
        color:"#fff"
      },
      backgroundContainer:{
        backgroundColor:"#6082AB",
        height:600,
        width:360,
        marginTop:30,
        borderRadius:50
        
      },
      textInput:{
        backgroundColor:"#fff",
borderRadius:50,
width:250,
height:45
      },
      marginInput:{
        marginLeft:55,
        marginTop:10
      },
      account:{
        color:"#fff",
        fontSize:30,
        fontWeight:"bold",
        marginLeft:140,
        marginTop:20
      },
      title:{
        color:"#fff",
        fontSize:15,
        marginLeft:58,
        marginTop:18
      },
      signupButton: {
        backgroundColor:"#fff",
        height:40,
        width:200,
        borderRadius:20,
        marginLeft: 80,
        marginRight: 50,
        marginTop:40
      },
      signupText:{
        textAlign:"center",
        fontWeight: "bold", 
    fontSize:20,
    marginTop:5,
color:"#6082AB"},
haveAccount:{
    color:"#fff",
    textAlign:"center",
    marginTop:10

},
margin_box:{
    marginTop:50
}
})
export default Login