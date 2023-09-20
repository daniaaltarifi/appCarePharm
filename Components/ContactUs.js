import React from "react";
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
import Header from "./Header.js";
function ContactUs() {
  return (
    <View>
      <Header title="Help" />
      <Text style={styles.text_contact}>ContactUs</Text>
      <View style={styles.container_num}>
        <Image source={require("../assets/phone.png")}></Image>
        <Text style={styles.phoneNum}>+1414354000</Text>
      </View>
      <View style={styles.container_num}>
        <Image source={require("../assets/email.png")}></Image>
        <Text style={styles.phoneNum}>carePharm@gmail.com</Text>
      </View>
      <View style={styles.container_location}>
        <Image source={require("../assets/location.png")}></Image>
        <Text style={styles.phoneNum}>
          657 S Greenfield Ave Milwaukee, WI 53201
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text_contact: {
    fontSize: 40,
    textAlign: "center",
    color: "#6082AB",
    fontWeight: "500",
    marginTop: 10,
  },
  container_num: {
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center",
  },
  phoneNum: {
    fontSize: 25,
    marginTop: 10,
    color: "#6082AB",
  },
  container_location: {
    flexDirection: "column",
    alignItems: "center",
    width: 300,
    marginTop: 40,
    marginLeft: 30,
  },
});
export default ContactUs;
