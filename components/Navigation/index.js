import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

//components
import TripList from "../trips/TripList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripDetail from "../trips/TripDetail";

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AddTrip from "../trips/AddTrip";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  function Home() {
    return (
      //bottom tab bar
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
          component={AddTrip}
          options={{
            tabBarLabel: "Add Trip",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={34} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Signin}
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
  return (
    //screen navigations
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
          };
        }}
      />
    </Stack.Navigator>
  );
}
