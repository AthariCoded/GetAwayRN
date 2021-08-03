import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import instance from "./instance";

class ProfileStore {
  profile = null;
  profiles = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  //fetches all profiles
  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles/");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProfiles", error);
    }
  };

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

  profileByUserId = (userId) =>
    this.profiles.find((profile) => profile.userId === userId);

  /*
  fetchProfile = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`);
      this.profile = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchProfile", error);
    }
  };
  */
};

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
