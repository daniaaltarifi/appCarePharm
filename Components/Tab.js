
// const TabNavigator = createMaterialBottomTabNavigator(
//     {
//       Home: {
//         screen: Home,
//         navigationOptions: {
//           tabBarLabel: "Home",
//           tabBarIcon: (tabInfo) => (
//             <Ionicons
//               name="md-home"
//               size={tabInfo.focused ? 26 : 20}
//               color={tabInfo.tintColor}
//             />
//           ),
//         },
//       },
//       User: {
//         screen: Profile,
//         navigationOptions: {
//           tabBarLabel: "User",
//           tabBarIcon: (tabInfo) => (
//             <Ionicons
//               name="md-person-circle-outline"
//               size={tabInfo.focused ? 26 : 20}
//               color={tabInfo.tintColor}
//             />
//           ),
//         },
//       },
//       Setting: {
//         screen: Medicines,
//         navigationOptions: {
//           tabBarLabel: "Setting",
//           tabBarIcon: (tabInfo) => (
//             <Ionicons
//               name="md-settings-outline"
//               size={tabInfo.focused ? 26 : 20}
//               color={tabInfo.tintColor}
//             />
//           ),
//         },
//       },
//     },
//     {
//       initialRouteName: "Home",
//       barStyle: { backgroundColor: "#006600" },
//     }
//   );
  
//   // Wrap the tab navigator with a container component
//   const TabNavigatorContainer = () => {
//     return <TabNavigator />;
//   };