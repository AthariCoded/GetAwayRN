import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import { ScrollView } from "react-native";
import Trip from "./Trip";

//styles
import { ListWrapper, HomeLogo, HomeImage } from "./styles";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  //you will render the list twice, once in the explore and once in the user profile...
  // you will defo need a filter
  //change later
  const trips = tripStore.trips;
  const tripList = trips.map((trip) => (
    <Trip trip={trip} key={trip.id} navigation={navigation} /> //navigation={navigation}
  ));

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

export default observer(TripList);
