import { makeAutoObservable } from "mobx";
import axios from "axios"; //remove this
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
      // 👇🏻 you can clean it up a bit
      const updatedTrips = this.trips.filter((trip) => trip.id !== TripId);
      this.trips = updatedTrips;
      //👆🏻
    } catch (error) {
      console.error(error);
    }
  };

  tripAdd = async (newTrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      //why you are having a respone ? you are not using it right?
      const response = await instance.post("/trips", newTrip);
      this.fetchTrips(); //hmmmm you are doing this because the trips have the username right? I think you can handle it without sending another request think about it...
      navigation.navigate("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  TripUpdate = async (updatedTrip) => {
    // try {
    //   const formData = new FormData();
    //   for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
    //   const response = await axios.put(
    //     `http://localhost:8000/trips/${updatedTrip.id}`,
    //     formData
    //   );
    //   this.trips[this.trips.findIndex((trip) => trip.id === response.data.id)] =
    //     {
    //       ...response.data,
    //     };
    // } catch (error) {
    //   console.error(error);
    // }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
