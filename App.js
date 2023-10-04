import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Components/Welcome";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Medicines from "./Components/Medicines";
import MedicineDetails from "./Components/MedicineDetails.js";
import MedicinesNews from "./Components/MedicinesNews";
import NewsDetails from "./Components/NewsDetails";
import ContactUs from "./Components/ContactUs";
import Profile from "./Components/Profile";
import Pharmacy from "./Components/Pharmacy.js";
import PharmacyDetails from "./Components/PharmacyDetails";
import AdvancedInfo from "./Components/AdvancedInfo";
import Advanced from "./Components/Advanced";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './Store.js'; // Import your Redux store
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('appCarePharm', () => App);

// Your screens

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
 
  return (
    <Provider store={store}>

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
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
        component={MainTabNavigator}
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
          name="Advanced"
          component={Advanced}
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
    </Provider>

  );
}
function MainTabNavigator() {
  return (
    <Provider store={store}>

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#6082AB',
      }}
   
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown:false
         
        }}
      />
       <Tab.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          tabBarLabel: 'Help',
          headerShown:false
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown:false
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="settings" color={color} size={size} />
          // ),
        }}
      />
    </Tab.Navigator>
    </Provider>
  );
}
export default App;
