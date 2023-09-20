import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function Welcome() {
    const navigation = useNavigation();

  return (
    <View>
      <Image source={require("../assets/welcome.png")} style={styles.image} />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 45,
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Welcome
        </Text>
        <Text style={styles.desc}>
          Get advices, and medical recommendations from our most precious
          doctors.
        </Text>
        <TouchableOpacity style={styles.startedButton}  onPress={()=>{
        navigation.navigate("SignUp");
      }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6082AB",
    height: "50%",
  },
  image: {
    height: "55%",
  },
  desc: {
    color: "#fff",
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
    marginTop:20
  },
  startedButton: {
    backgroundColor:"#fff",
    height:40,
    width:200,
    borderRadius:10,
    marginLeft: 80,
    marginRight: 50,
    marginTop:40
  },
  buttonText:{
    textAlign:"center",
    fontWeight: "bold", 
fontSize:20,
marginTop:5}
});
export default Welcome;
