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
import { DataTable } from 'react-native-paper';
function AdvancedInfo() {
  const navigation = useNavigation();
  const [advanced,setAdvanced]=useState([])
//   useEffect(() => {
//     const goForAxios = () => {
//       axios
//         .get("http://192.168.68.107:5000/advancedMedicine/getAllMedicine")
//         .then((response) => {
//           // console.log('getting data from axios', response.data);
//           setMedicines(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//     goForAxios();
//   }, []);
  return (
    <ScrollView >
                <Header title="Advanced Information" />

    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Desc</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
      </DataTable.Row>
  
      <DataTable.Row>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell>Uttapam</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Vanshika</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Teena</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </ScrollView>
  );
}
const styles=StyleSheet.create({
    container: {
        padding: 15,
      },
      tableHeader: {
        backgroundColor: '#DCDCDC',
      },
})
export default AdvancedInfo;
