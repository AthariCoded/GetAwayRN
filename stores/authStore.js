import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";

import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser, navigation) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.setUser(res.data.token);
      /**so you are doing the navigation.replace twice (signup and signin)
       *  don't you think you can call it once in???**/
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
      //remove the logs
      console.log(res.data.token);
      console.log(this.user);
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
    //remove the log
    console.log("setting user");
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
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
