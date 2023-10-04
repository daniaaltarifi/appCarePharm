import React, { useState } from 'react'
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
  import axios from 'axios';
function Login() {
    const navigation = useNavigation();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
const[valid,setValid]=useState(false)
const handleLogin = async () => {
  try {
    const response = await axios.post('http://192.168.68.110:5000/users/auth', {
      email,
      password,
    });

    if (response.data) {
      // Navigate to the Profile screen and pass user information as route params
      navigation.navigate('Home', {
        // Pass user information as route params to the Profile screen
        screen: 'Profile',
        params: {
          username: response.data.username,
          email: response.data.email,
        },
      });
    } 
  } catch (error) {
    setValid(true);
    console.log('Invalid email or password');
  }
};

// const handleLogin = async () => {
//   try {
//     const response = await axios.post('http://192.168.68.110:5000/users/auth', {
//       email,
//       password,
//     });

//     if (response.data) {
//       navigation.navigate('Home');
//     } 
//   } catch (error) {
//     setValid(true); // Set the valid state to true for displaying the error message
//     console.log('Invalid email or password');
//     // console.error('Login Error', error);
//   }
// };


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
        onChangeText={(text)=>setEmail(text)}
        value={email}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={[styles.textInput,styles.marginInput]}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
        value={password}
        // onChangeText={newText => setText(newText)}
        // defaultValue={text}
      />
  {valid && (
  <Text style={styles.errorText}>Invalid email or password</Text>
)}
    <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
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
},
errorText: {
  color: 'red', // Change the color to your preferred error text color
  // fontSize: 16, // Adjust the font size as needed
  marginLeft: 58, // You can adjust the margin to align it properly
  marginTop: 10, // You can adjust the margin to align it properly
},
})
export default Login