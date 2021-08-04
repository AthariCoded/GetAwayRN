import React from "react";

import { Spinner, List } from "native-base";

//stores
import wishStore from "../../stores/wishStore";
import tripStore from "../../stores/tripStore";

//component
import WishItem from "./WishItem";

//observer
import { observer } from "mobx-react";

//styles

const WishList = () => {
  // const { tripId } = route.params;
  if (tripStore.loading) return <Spinner />;
  const wishList = wishStore.wishes
    .map((wish) => ({
      ...tripStore.getTripById(wish.tripId),
    }))
    .map((wish) => <WishItem wish={wish} key={wish.id} />);
  return <List>{wishList}</List>;
};

export default observer(WishList);
