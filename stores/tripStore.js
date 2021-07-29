import { makeAutoObservable } from "mobx";
import axios from "axios";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await axios.get("http://localhost:8000/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchTrips", error);
    }
  };

  TripDelete = async (TripId) => {
    // try {
    //   await axios.delete(`http://localhost:8000/trips/${TripId}`);
    //   const updatedTrips = this.products.filter(
    //     (trip) => trip.id !== TripId
    //   );
    //   this.trips = updatedTrips;
    // } catch (error) {
    //   console.error(error);
    // }
  };

  tripAdd = async (newTrip, user) => {
    // try {
    //   const formData = new FormData();
    //   for (const key in newTrip) formData.append(key, newTrip[key]);
    //   const response = await axios.post(
    //     `http://localhost:8000/brands/${user.id}/trips`,
    //     formData
    //   );
    //   this.products.push(response.data);
    //   brand.products.push({ id: response.data.id });
    // } catch (error) {
    //   console.error(error);
    // }
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
