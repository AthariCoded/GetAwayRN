import styled from "styled-components/native";
import { List } from "native-base";

export const ListWrapper = styled.View`
  ${"" /* margin-top: 10%; */}
  margin-left: -8.5;
`;

export const HomeLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 12%;
  margin-bottom: 2%;
`;

export const HomeImage = styled.Image``;

export const TripDetailWrapper = styled.View`
  margin: 20px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const TripDetailImage = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 1;
  margin-bottom: 7px;
`;

export const TripDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
  ${"" /* margin-bottom: 20px; */}
`;

export const TripItemTitle = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  margin-bottom: -10px;
  text-align: center;
`;

export const TripItemUsername = styled.Text`
  ${"" /* align-self: flex-start; */}
  font-size: 13px;
  margin-top: 16px;
`;

export const TripItemProfilePicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 10px;
`;

export const TripDetailDetails = styled.Text`
  font-size: 20px;
`;

export const TripListItem = styled.View`
  flex-direction: row;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -9px;
`;
