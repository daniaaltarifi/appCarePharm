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
function Advanced() {
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState();
  useEffect(() => {
    const goForAxios = () => {
      axios
        .get("https://backend-80j6.onrender.com/advancedMedicine/getAllMedicine/")
        .then((response) => {
          // console.log('getting data from axios', response.data);
          setMedicines(response.data);
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
        <Header title="Advanced" />
        {medicines &&
          medicines.map((medicine) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AdvancedInfo", {
                  _id:medicine._id,
                  image:medicine.avatar,
                  RECORD_STATUS_DESC: medicine.RECORD_STATUS_DESC,
                  REGISTRATION_REQUEST_NUMBER: medicine.REGISTRATION_REQUEST_NUMBER,
                  REGISTRATION_REQUEST_DATE: medicine.REGISTRATION_REQUEST_DATE,
                  DRG_SERIAL_NO: medicine.DRG_SERIAL_NO,
                  DRG_BARCODE: medicine.DRG_BARCODE,
                  NAME: medicine.NAME,
                  DRG_FILLING: medicine.DRG_FILLING,
                  DOSAGE: medicine.DOSAGE,
                  DRG_CONCENTRATE: medicine.DRG_CONCENTRATE,
                  STORES_DESC_L: medicine.STORES_DESC_L,
                  INGREDIENT: medicine.INGREDIENT,
                  ATCCODE:medicine.ATCCODE,
                  DRG_REG_NO:medicine.DRG_REG_NO,
                  REGISTRATION_DATE:medicine.REGISTRATION_DATE,
                  DRG_RENUAL_NO:medicine.DRG_RENUAL_NO,
                  RE_REGISTRATION_DATE:medicine.RE_REGISTRATION_DATE,
                  DRG_INDUST_CMP:medicine.DRG_INDUST_CMP,
                  DRG_INDUST_CMP_COUNTRY:medicine.DRG_INDUST_CMP_COUNTRY,
                  DRG_SALES_CMP:medicine.DRG_SALES_CMP,
                  DRG_SALES_COUNTRY:medicine.DRG_SALES_COUNTRY,
                  DRG_PRIMARY_CMP:medicine.DRG_PRIMARY_CMP,
                  DRG_PRIMARY_CMP_COUNTRY:medicine.DRG_PRIMARY_CMP_COUNTRY,
                  DRG_SECONDARY_CMP:medicine.DRG_SECONDARY_CMP,
                  DRG_SECONDARY_CMP_COUNTRY:medicine.DRG_SECONDARY_CMP_COUNTRY,
                  DRG_B_R_CMP:medicine.DRG_B_R_CMP,
                  DRG_B_R_CMP_COUNTRY:medicine.DRG_B_R_CMP_COUNTRY,
                  JHP:medicine.JHP,
                  JHP_TAXED:medicine.JHP_TAXED,
                  LIST_NAME:medicine.LIST_NAME,
                  LIST_CLASSIFICATION:medicine.LIST_CLASSIFICATION,
                  LIST_RECORD_TYPE:medicine.LIST_RECORD_TYPE,
                  ITEM_SOURCE:medicine.ITEM_SOURCE,
                  DISP_CATEGORY:medicine.DISP_CATEGORY,
                  DRUG_TYPE:medicine.DRUG_TYPE
                })
              }
              key={medicine._id}
            >
              <View style={styles.medicine_container}>
                <Image
                  source={{ uri: medicine.avatar }} // Use uri to load the image from a URL
                  style={styles.medicine_img}
                />
                <View style={styles.text_container}>
                  <Text style={styles.text_medicine}>{medicine.NAME}</Text>
                  <Text style={styles.text_desc}>
                    Price:<Text style={styles.price}>{medicine.JPP}</Text>
                  </Text>
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
  medicine_img: {
    height: 90,
    width: 90,
    marginLeft: 30,
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
  price: {
    color: "#6082AB",
    fontWeight: "700",
    marginTop: 25,
  },
});
export default Advanced;
