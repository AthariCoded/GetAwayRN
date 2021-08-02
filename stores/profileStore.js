import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import instance from "./instance";

class ProfileStore {
  profile = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUserProfile = async (profileId) => {
    try {
      const response = await instance.get(`/profiles/${profileId}`);
      this.profile = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProfile", error);
    }
  };

  ProfileUpdate = async (updatedProfile) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);
      const response = await instance.put(
        `/profiles/${updatedProfile.id}`,
        formData
      );
    } catch (error) {
      console.error(error);
    }
  };
  
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
