import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import { ScrollView } from "react-native";
import TripItem from "./TripItem";

//styles
import { ListWrapper, HomeLogo, HomeImage } from "./styles";

//stores
import tripStore from "../../stores/tripStore";

//observer
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

  //change later
  const trips = tripStore.trips;
  const tripList = trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} /> //navigation={navigation}
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
