import React from "react";

//native-base
import { List, Spinner, Button } from "native-base";

//components
import { ScrollView } from "react-native";
import Trip from "./Trip";

//styles
import { ListWrapper, HomeLogo, HomeImage } from "./styles";
import Signout from "../authentication/Signout";
//stores
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
// mobx
import { observer } from "mobx-react";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

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
      {/* <Signout navigation={navigation} /> */}
      <Button
        onPress={
          authStore.user ? authStore.signout : () => alert("Not logged in!")
        }
      >
        Signout
      </Button>
    </>
  );
};

export default observer(TripList);
