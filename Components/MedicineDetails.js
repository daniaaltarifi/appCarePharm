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
import MedicineData from "../Data/MedicinesData";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';

function MedicineDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const {_id,image, medicineName,DRG_SERIAL_NO ,BARCODE,DRG_FILLING,DOSAGE,DRG_CONCENTRATE,STORES_DESC_L,ATCCODE,DRG_PRIMARY_CMP_COUNTRY,JPP,PHARM_P} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>

        <TouchableOpacity onPress={()=>{
          navigation.navigate('Medicines')
        }}>
        <Image
          source={require("../assets/back_arrow_left_icon.png")}
          style={styles.arrow}
        />
        </TouchableOpacity>
        <View style={styles.img_container}>
          <Image
            source={{uri:image}}
            style={styles.medicine_img}
          />
        </View>
        <View style={styles.container_info}>
          <Text style={styles.title}>{medicineName}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>DRG_SERIAL_NO:</Text>
          <Text style={styles.details_info}>{DRG_SERIAL_NO}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>BARCODE:</Text>
          <Text style={styles.details_info}>{BARCODE}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>DRG_FILLING</Text>
          <Text style={styles.details_info}>
           {DRG_FILLING}
          </Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>DOSAGEe:</Text>
          <Text style={styles.details_info}>{DOSAGE}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>DRG_CONCENTRATE</Text>
          <Text style={styles.details_info}>{DRG_CONCENTRATE}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>STORES_DESC_L:</Text>
          <Text style={styles.details_info}>{STORES_DESC_L}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>ATCCODE:</Text>
          <Text style={styles.details_info}>{ATCCODE}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>DRG_PRIMARY_CMP_COUNTRY</Text>
          <Text style={styles.details_info}>{DRG_PRIMARY_CMP_COUNTRY}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>JPP:</Text>
          <Text style={styles.details_info}>{JPP}</Text>
        </View>
        <View style={styles.container_info}>
          <Image
            source={require("../assets/logoMedicine.png")}
            style={styles.icon_img}
          ></Image>
          <Text style={styles.info}>PHARM_P:</Text>
          <Text style={styles.details_info}>{PHARM_P}</Text>
        </View>
        {/* <TouchableOpacity style={styles.btn_moreDetails}>
          <Text style={styles.text_moreDetails} onPress={()=>{navigation.navigate('AdvancedInfo', { medicineId:_id  })}}>More Details</Text>
        </TouchableOpacity> */}

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  arrow: {
    marginRight: 10, // Add some spacing between the arrow and text
    marginLeft: 20,
    height: 30,
    width: 30,
  },
  img_container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  medicine_img: {
    height: 200,
    width: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
  },
  container_info: {
    marginLeft: 13,
    marginTop: 30,
    flexDirection: "row",
  },
  info: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 2,
  },
  details_info: {
    fontSize: 14,
    marginTop: 3,
    marginBottom:13
  },
  icon_img: {
    height: 24,
    width: 30,
  },
  btn_moreDetails: {
    backgroundColor: "#6082AB",
    height: 50,
    width: 250,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginTop:20,
    marginBottom:10
  },
  text_moreDetails:{
    color:"#fff",
    fontSize:20,
    fontWeight:"500"
  }
});
export default MedicineDetails;
