import { makeAutoObservable } from "mobx";

import authStore from "./authStore";
import instance from "./instance";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchTrips", error);
    }
  };

  tripDelete = async (TripId) => {
    try {
      await instance.delete(`/trips/${TripId}`);
      const updatedTrips = this.trips.filter((trip) => trip.id !== TripId);
      this.trips = updatedTrips;
    } catch (error) {
      console.error(error);
    }
  };

  tripAdd = async (newTrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post("/trips", newTrip);
      navigation.replace("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  tripUpdate = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      await instance.put(`/trips/${updatedTrip.id}`, formData);
      const foundTrip = this.trips.find((trip) => trip.id === updatedTrip.id);

      for (const key in foundTrip) foundTrip[key] = updatedTrip[key];
    } catch (error) {
      console.error(error);
    }
  };
  // tripUpdate = async (updateTrip) => {
  //   console.log(updateTrip);
  //   try {
  //     const response = await instance.put(
  //       `/trips/${updateTrip.id}`,
  //       updateTrip
  //     );

  //     const trip = this.trips.find((trip) => trip.id === response.data.id);

  //     for (const key in trip) trip[key] = response.data[key];
  //     this.trips = this.trips
  //       .filter((trip) => trip.id !== response.data.id)
  //       .push(trip);

  //     console.log(trip);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
