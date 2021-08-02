import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
    profile = [];
    loading = true;

    constructor() {
        makeAutoObservable(this);
    }

    fetchProfile = async (userId) => {
        try {
            const response = await instance.get(`/profile/${userId}`);
            this.profile = response.data;
            this.loading = false;
        } catch (error) {
            console.error("fetchProfile", error);
        }
    };

}

const profileStore = new ProfileStore();
export default profileStore;
