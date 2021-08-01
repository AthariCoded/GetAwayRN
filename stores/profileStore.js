import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
    profile = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    fetchProfile = async () => {
        try {
            const response = await instance.get("/profile");
            this.profile = response.data;
            this.loading = false;
        } catch (error) {
            console.error("fetchProfile", error);
        }
    };

}

const profileStore = new ProfileStore();
profileStore.fetchTrips();
export default profileStore;
