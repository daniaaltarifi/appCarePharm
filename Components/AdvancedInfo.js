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
import { DataTable } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

function AdvancedInfo() {
  const navigation = useNavigation();
  const [advanced, setAdvanced] = useState([]);
  const route = useRoute();
  const {
    _id,
    image,
    RECORD_STATUS_DESC,
    REGISTRATION_REQUEST_NUMBER,
    REGISTRATION_REQUEST_DATE,
    DRG_SERIAL_NO,
    DRG_BARCODE,
    NAME,
    DRG_FILLING,
    DOSAGE,
    DRG_CONCENTRATE,
    STORES_DESC_L,
    INGREDIENT,
    ATCCODE,
    DRG_REG_NO,
    REGISTRATION_DATE,
    DRG_RENUAL_NO,
    RE_REGISTRATION_DATE,
    DRG_INDUST_CMP,
    DRG_INDUST_CMP_COUNTRY,
    DRG_SALES_CMP,
    DRG_SALES_COUNTRY,
    DRG_PRIMARY_CMP,
    DRG_PRIMARY_CMP_COUNTRY,
    DRG_SECONDARY_CMP,
    DRG_SECONDARY_CMP_COUNTRY,
    DRG_B_R_CMP,
    DRG_B_R_CMP_COUNTRY,
    JHP,
    JHP_TAXED,
    LIST_NAME,
    LIST_CLASSIFICATION,
    LIST_RECORD_TYPE,
    ITEM_SOURCE,
    DISP_CATEGORY,
    DRUG_TYPE,
  } = route.params;
  // const {medicineId}=route.params
  // console.log(medicineId)
  // useEffect(() => {
  //   const goForAxios = () => {
  //     axios
  //       .get(`http://192.168.68.107:5000/advancedMedicine/getAllMedicine/${medicineId}`)
  //       .then((response) => {
  //         // console.log('getting data from axios', response.data);
  //         setAdvanced(response.data);
  //         console.log(advanced)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   goForAxios();
  // }, [medicineId]);
  return (
    <ScrollView>
      {/* <Header title="Advanced Information" /> */}
      <View style={styles.header}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              source={require("../assets/arrow.png")}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Advanced Information</Text>
        </View>
      </View>
      <Text style={styles.title}>{NAME}</Text>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Information</DataTable.Title>
          <DataTable.Title>Description</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>Record Status</DataTable.Cell>
          <DataTable.Cell>{RECORD_STATUS_DESC}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Registration Date</DataTable.Cell>
          <DataTable.Cell>{REGISTRATION_REQUEST_DATE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Registration Number</DataTable.Cell>
          <DataTable.Cell>{REGISTRATION_REQUEST_NUMBER}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Serial Num</DataTable.Cell>
          <DataTable.Cell>{DRG_SERIAL_NO}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Barcode</DataTable.Cell>
          <DataTable.Cell>{DRG_BARCODE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>DRG_FILLING</DataTable.Cell>
          <DataTable.Cell>{DRG_FILLING}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Dosage</DataTable.Cell>
          <DataTable.Cell>{DOSAGE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Concentrate</DataTable.Cell>
          <DataTable.Cell>{DRG_CONCENTRATE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Stores Desc L</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>{STORES_DESC_L}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ingredient</DataTable.Cell>
          <DataTable.Cell>{INGREDIENT}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Ataccode</DataTable.Cell>
          <DataTable.Cell>{ATCCODE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Reg No</DataTable.Cell>
          <DataTable.Cell>{DRG_REG_NO}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Registration Date</DataTable.Cell>
          <DataTable.Cell>{REGISTRATION_DATE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Renual No</DataTable.Cell>
          <DataTable.Cell>{DRG_RENUAL_NO}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Re Registration Date</DataTable.Cell>
          <DataTable.Cell>{RE_REGISTRATION_DATE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Indust Cmp</DataTable.Cell>
          <DataTable.Cell>{DRG_INDUST_CMP}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Indust Cmp Country</DataTable.Cell>
          <DataTable.Cell>{DRG_INDUST_CMP_COUNTRY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Sales Country</DataTable.Cell>
          <DataTable.Cell>{DRG_SALES_COUNTRY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Primary Cmp</DataTable.Cell>
          <DataTable.Cell>{DRG_PRIMARY_CMP}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Primary Cmp Country</DataTable.Cell>
          <DataTable.Cell>{DRG_PRIMARY_CMP_COUNTRY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Secondary Cmp</DataTable.Cell>
          <DataTable.Cell>{DRG_SECONDARY_CMP}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg Secondary Cmp Country</DataTable.Cell>
          <DataTable.Cell>{DRG_SECONDARY_CMP_COUNTRY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg B R Cmp</DataTable.Cell>
          <DataTable.Cell>{DRG_B_R_CMP}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drg B R Cmp Country</DataTable.Cell>
          <DataTable.Cell>{DRG_B_R_CMP_COUNTRY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Jhp</DataTable.Cell>
          <DataTable.Cell>{JHP}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Jhp Taxed</DataTable.Cell>
          <DataTable.Cell>{JHP_TAXED}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>List Name</DataTable.Cell>
          <DataTable.Cell>{LIST_NAME}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>List Classification</DataTable.Cell>
          <DataTable.Cell>{LIST_CLASSIFICATION}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>List Record Type</DataTable.Cell>
          <DataTable.Cell>{LIST_RECORD_TYPE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Item Source</DataTable.Cell>
          <DataTable.Cell>{ITEM_SOURCE}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Disp Category</DataTable.Cell>
          <DataTable.Cell>{DISP_CATEGORY}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Drug Type</DataTable.Cell>
          <DataTable.Cell>{DRUG_TYPE}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  name: {
    fontSize: 5,
  },
  cell: {
    fontSize: 50, // Adjust the font size
    padding: 10, // Adjust the padding
  },
  title: {
    marginTop: 13,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default AdvancedInfo;
