import React from "react";

import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class WishStore {
  wishes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchWishes = async () => {
    const wishes = await AsyncStorage.getItem("wish");
    runInAction(() => {
      this.wishes = wishes ? JSON.parse(wishes) : [];
    });
  };

  addToWish = async (newWish) => {
    const foundWish = this.wishes.find(
      (wish) => wish.tripId === newWish.tripId
    );
    if (foundWish) <></>;
    else this.wishes.push(newWish);
    await AsyncStorage.setItem("wish", JSON.stringify(this.wishes));
  };

  deleteFromWish = async (wishId) => {
    this.wishes = this.wishes.filter((wish) => wish.tripId !== wishId);
    await AsyncStorage.setItem("wish", JSON.stringify(this.wishes));
  };
  get totalQuantity() {
    let quantity = this.wishes.length;
    return quantity;
  }
}

const wishStore = new WishStore();
wishStore.fetchWishes();
export default wishStore;
