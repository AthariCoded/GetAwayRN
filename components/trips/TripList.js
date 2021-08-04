import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import { ScrollView } from "react-native";
import TripItem from "./TripItem";
import Signout from "../authentication/Signout";
//styles
import { ListWrapper, HomeLogo, HomeImage } from "./styles";

//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";

//observer
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  //change later
  let trips = tripStore.trips;
  if (authStore.user)
    trips = trips.filter((trip) => trip.userId !== authStore.user.id);
  const tripList = trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} /> //navigation={navigation}
  ));

  return (
    <>
      <HomeLogo>
        <HomeImage source={require("../../assets/images/GetawayLogo.png")} />
        <Signout />
      </HomeLogo>
      <ScrollView>
        <ListWrapper>
          <List>{tripList}</List>
        </ListWrapper>
      </ScrollView>
    </>
  );
};

export default observer(TripList);
