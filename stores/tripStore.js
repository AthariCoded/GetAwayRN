import { makeAutoObservable, runInAction } from "mobx";
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
      runInAction(() => {
        this.trips = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("fetchTrips", error);
    }
  };

  tripDelete = async (TripId) => {
    try {
      await instance.delete(`/trips/${TripId}`);
      runInAction(() => {
        const updatedTrips = this.trips.filter((trip) => trip.id !== TripId);
        this.trips = updatedTrips;
      });
    } catch (error) {
      console.error(error);
    }
  };

  tripAdd = async (newTrip, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const response = await instance.post("/trips", newTrip);
      runInAction(() => {
        this.fetchTrips();
        navigation.navigate("Explore");
      });
    } catch (error) {
      console.error(error);
    }
  };

  tripUpdate = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      await instance.put(`/trips/${updatedTrip.id}`, formData);
      runInAction(() => {
        const foundTrip = this.trips.find((trip) => trip.id === updatedTrip.id);
        for (const key in foundTrip) foundTrip[key] = updatedTrip[key];
      });
    } catch (error) {
      console.error(error);
    }
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);

  tripFavoriteUpdate = async (updatedTrip) => {
    try {
      await instance.put(`/trips/fav/${updatedTrip.id}`);
      runInAction(() => {
        const foundTrip = this.trips.find((trip) => trip.id === updatedTrip.id);
        foundTrip["favorite"] = !foundTrip["favorite"];
      });
    } catch (error) {
      console.error(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
