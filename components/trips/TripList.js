import React from "react";

//native-base
import { List, ListItem, Text, Spinner } from "native-base";

//components
//import ProductItem from "./ProductItem";
import { ScrollView, Image } from "react-native";
import Trip from "./Trip";

//styles
import { ListWrapper, HomeLogo, HomeImage } from "./styles";

//stores
//import productStore from "../../stores/productStore";
import tripStore from "../../stores/tripStore";
//{ products, navigation }
const TripList = () => {
  if (tripStore.loading) return <Spinner />;
  const trips = tripStore.trips;
  const tripList = trips.map((trip) => (
    <Trip trip={trip} key={trip.id} /> //navigation={navigation}
  ));
  //   const trips = tripStore.trips.map((trip) => (
  //     <ListItem>
  //       <view>
  //         <Text>i hate react native {trip.title}</Text>
  //       </view>
  //     </ListItem>
  //   ));

  return (
    <>
      <HomeLogo>
        <HomeImage source={require("../../assets/images/GetawayLogo.png")} />
      </HomeLogo>
      <ScrollView>
        <ListWrapper>
          <List>{tripList}</List>
        </ListWrapper>
      </ScrollView>
    </>
  );
};

export default TripList;
