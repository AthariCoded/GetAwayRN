import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import TripList from "../trips/TripList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#ED3293", height: 75, paddingTop: 13 },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={TripList}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={34} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={TripList}
        options={{
          tabBarLabel: "Add Trip",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={34} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TripList}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={27} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// export default RootNavigator = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Explore"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "white",
//         },
//         headerTintColor: "black",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <Stack.Screen
//         name="Explore"
//         component={TripList}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
