import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Components/Welcome";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Medicines from "./Components/Medicines";
import MedicineDetails from './Components/MedicineDetails.js'
import MedicinesNews from "./Components/MedicinesNews";
import NewsDetails from "./Components/NewsDetails";
import ContactUs from "./Components/ContactUs";
import Profile from "./Components/Profile";
import Pharmacy from './Components/Pharmacy.js'
import PharmacyDetails from "./Components/PharmacyDetails";
import AdvancedInfo from "./Components/AdvancedInfo";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define your screens and screen options here */}
        {/* Example screen */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
             <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Medicines"
          component={Medicines}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MedicineDetails"
          component={MedicineDetails}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="AdvancedInfo"
          component={AdvancedInfo}
          options={{ headerShown: false }}
        />
             <Stack.Screen
          name="MedicinesNews"
          component={MedicinesNews}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="PharmacyDetails"
          component={PharmacyDetails}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
              <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
