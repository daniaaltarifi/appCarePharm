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
import { useRoute } from "@react-navigation/native";
function PharmacyDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { pharmacyName, pharmacySummary, city, street, state, services ,monday,Tuesday,wednesday,thursday,friday,saturday,sunday,avatar,phone,email,website} =
    route.params;
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <View style={styles.backContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Pharmacy");
              }}
            >
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Pharmacy Details</Text>
          </View>
        </View>
        <Image
            source={{uri:avatar}}
            style={styles.pharmacy_img}
        ></Image>
        <Text style={styles.title}>{pharmacyName}</Text>
        <Text style={styles.paragraph}><Text style={styles.desc}>City:</Text>{city}</Text>
        <Text style={styles.paragraph}><Text style={styles.desc}>Street:</Text>{street}</Text>
        <Text style={styles.paragraph}><Text style={styles.desc}>State:</Text>{state}</Text>
        {/* <View style={styles.container}>
            <Text style={styles.title}>Services</Text>
      {services.map((item, index) => (
        <View style={styles.listItem} key={index}>
          <View />
          <Text style={styles.paragraph}>{item}</Text>
        </View>
      ))}     
      </View> */}
      <View>
        <Text style={styles.title}>Hours of operation</Text>
        <Text style={styles.details}><Text style={styles.desc}>Monday:</Text>{monday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>Tuesday:</Text>{Tuesday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>wednesday:</Text>{wednesday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>Thursday:</Text>{thursday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>Friday::</Text>{friday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>Saturday::</Text>{saturday}</Text>
        <Text style={styles.details}><Text style={styles.desc}>Sunday::</Text>{sunday}</Text>

      </View>
      <View>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.details}>{phone}</Text>
        <Text style={styles.details}>{email}</Text>
        <Text style={styles.details}>{website}</Text>

      </View>
       </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
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
    fontWeight: "bold",
  },
  img: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
    marginBottom:10
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Adjust the spacing between items
    // marginLeft:18
  },
  details:{
    marginLeft:15,
    fontSize:16,
    marginBottom:5
  },
  desc:{
    fontWeight:"500"
  }
  ,
  pharmacy_img: {
    height: 300,
    width: 350,
  },
});
export default PharmacyDetails;
