import { makeAutoObservable, runInAction } from "mobx";
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
      runInAction(() => {
        this.profiles = response.data;
        this.loading = false;
      });
    } catch (error) {
      console.error("fetchProfiles", error);
    }
  };

  setUserProfile = (profile) => {
    this.profile = profile;
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
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
