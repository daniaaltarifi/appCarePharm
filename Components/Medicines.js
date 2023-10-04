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
function Medicines() {
  const navigation = useNavigation();
  const [medicines, setMedicines] = useState();
  useEffect(() => {
    const goForAxios = () => {
      axios
        .get("https://backend-80j6.onrender.com/medicineAvailable")
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
        <Header title="Medicines" />
        {medicines &&
          medicines.map((medicine) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MedicineDetails", {
                  _id:medicine._id,
                  image:medicine.avatar,
                  medicineName: medicine.NAME,
                  DRG_SERIAL_NO: medicine.DRG_SERIAL_NO,
                  BARCODE: medicine.BARCODE,
                  DRG_FILLING: medicine.DRG_FILLING,
                  DOSAGE: medicine.DOSAGE,
                  DRG_CONCENTRATE: medicine.DRG_CONCENTRATE,
                  STORES_DESC_L: medicine.STORES_DESC_L,
                  ATCCODE: medicine.ATCCODE,
                  DRG_PRIMARY_CMP_COUNTRY: medicine.DRG_PRIMARY_CMP_COUNTRY,
                  JPP: medicine.JPP,
                  PHARM_P: medicine.PHARM_P,
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
export default Medicines;
