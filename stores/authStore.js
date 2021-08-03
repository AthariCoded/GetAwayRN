import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

import AsyncStorage from "@react-native-async-storage/async-storage";

import profileStore from "./profileStore";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser, navigation) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.setUser(res.data.token);
      navigation.replace("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);

      navigation.replace("Explore");
    } catch (error) {
      console.error(error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    profileStore.setUserProfile(this.user.profile); //get profile when user logs/signs in
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
