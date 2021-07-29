import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import TripList from "../trips/TripList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripDetails from "../trips/TripDetails";

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
        name="TripDetails"
        component={TripDetails}
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
