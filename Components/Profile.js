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
function Profile() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.profile_container}>
          <Image source={require("../assets/profileImg.png")}></Image>
          <Text style={styles.username}>username</Text>
        </View>
        <Text style={styles.email}>username@gmail.com</Text>
      </View>
      <View style={styles.profile}>
        <Image source={require("../assets/editProfile.png")}></Image>
        <Text style={styles.profile_text}>Edit Profile</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.arrow}
          ></Image>
        </View>
      </View>
      <View style={styles.profile}>
        <Image source={require("../assets/aboutUs.png")}></Image>
        <Text style={styles.profile_text}>About</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.arrow}
          ></Image>
        </View>
      </View>
      <View style={styles.profile}>
        <Image source={require("../assets/terms.png")}></Image>
        <Text style={styles.profile_text}>Terms & conditions</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.arrow}
          ></Image>
        </View>
      </View>
      <View style={styles.profile}>
        <Image source={require("../assets/help.png")}></Image>
        <Text style={styles.profile_text}>Help</Text>
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Image
            source={require("../assets/arrow-left.png")}
            style={styles.arrow}
          ></Image>
        </View>
      </View>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.text_logout}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6082AB",
    height: 270,
    width: 380,
    marginTop: 30,
  },
  profile_container: {
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  username: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  email: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 100,
  },
  profile: {
    flexDirection: "row",
  },
  profile_text: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
  arrow: {
    marginTop: 20,
  },
  logout:{
    backgroundColor:'#6082AB',
    height:55,
    borderRadius:10,
    width:300,
    marginLeft:29,
    marginTop:20
  },
  text_logout:{
    color:"#fff",
    fontSize:25,
    fontWeight:"500",
    textAlign:"center",
    marginTop:7
  }
});
export default Profile;
