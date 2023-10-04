// import React from 'react'
// import { Ionicons } from "@expo/vector-icons";
// import { createAppContainer } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";
// import MedicinesNews from './MedicinesNews';
// import Home from './Home';
// import Profile from './Profile';
// import Medicines from './Medicines';
// function TabNavigation() {
//     const TabNavigator = createMaterialBottomTabNavigator(
//         {
//           Home: {
//             screen: MedicinesNews,
//             navigationOptions: {
//               tabBarLabel: "Home",
//               tabBarIcon: (tabInfo) => (
//                 <Ionicons
//                   name="md-home"
//                   size={tabInfo.focused ? 26 : 20}
//                   color={tabInfo.tintColor}
//                 />
//               ),
//             },
//           },
//           User: {
//             screen: Profile,
//             navigationOptions: {
//               tabBarLabel: "User",
//               tabBarIcon: (tabInfo) => (
//                 <Ionicons
//                   name="md-person-circle-outline"
//                   size={tabInfo.focused ? 26 : 20}
//                   color={tabInfo.tintColor}
//                 />
//               ),
//             },
//           },
//           Setting: {
//             screen: Medicines,
//             navigationOptions: {
//               tabBarLabel: "Setting",
//               tabBarIcon: (tabInfo) => (
//                 <Ionicons
//                   name="md-settings-outline"
//                   size={tabInfo.focused ? 26 : 20}
//                   color={tabInfo.tintColor}
//                 />
//               ),
//             },
//           },
//         },
//         {
//           initialRouteName: "Home",
//           barStyle: { backgroundColor: "#006600" },
//         }
//       );
    
//       const Navigator = createAppContainer(TabNavigator);
//   return (
//     <SafeAreaProvider>
//         <Navigator />
//     </SafeAreaProvider>  )
// }

// export default TabNavigation