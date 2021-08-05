import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//stores
import authStore from "../../stores/authStore";

//components
import TripList from "../trips/TripList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TripDetail from "../trips/TripDetail";
import ProfilePage from "../profile/ProfilePage";
import ProfileOwnerTrips from "../profile/ProfileOwnerTrips";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import WishButton from "../wish/WishButton";
import WishList from "../wish/WishList";
//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AddTrip from "../trips/AddTrip";
import UpdateTrip from "../trips/UpdateTrip";

//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  function Home() {
    //only show profile page when user is signed in. otherwise show signin/sign up
    let profileComp = null;
    authStore.user ? (profileComp = ProfilePage) : (profileComp = Signin);
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
              <Ionicons name="compass-outline" size={30} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddTrip}
          options={{
            tabBarLabel: "Add Trip",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={30} color="white" />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={profileComp}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-o" size={25} color="white" />
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
        name="ProfilePage"
        component={ProfilePage}
        options={() => {
          return {
            headerShown: true,
            headerRight: () => <WishButton />,
          };
        }}
      />

      <Stack.Screen
        name="ProfileOwnerTrips"
        component={ProfileOwnerTrips}
        options={{
          title: "",
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
      <Stack.Screen
        name="UpdateTrip"
        component={UpdateTrip}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WishList"
        component={WishList}
        options={{
          title: "Want to go",
        }}
      />
    </Stack.Navigator>
  );
}
