import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { observer } from "mobx-react";

const ProfileMap = ({ trips }) => {
  return (
    <View style={styles.container}>
      {trips ? (
        <MapView
          style={styles.map}
          region={{
            latitude: +trips[0].locationLat,
            longitude: +trips[0].locationLng,
            latitudeDelta: 0.0922 * 1500,
            longitudeDelta: 0.0421 * 1500,
          }}
        >
          {trips.map((trip) => (
            <Marker
              coordinate={{
                latitude: +trip.locationLat,
                longitude: +trip.locationLng,
              }}
              title={trip.title}
              key={trip.id}
            ></Marker>
          ))}
        </MapView>
      ) : (
        <MapView
          style={styles.map}
          region={{
            latitude: 29.3378,
            longitude: -48.0235,
            latitudeDelta: 0.0922 * 1500,
            longitudeDelta: 0.0421 * 1500,
          }}
        ></MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 200,
  },
});

export default observer(ProfileMap);
