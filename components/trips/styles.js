import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-left: -8.5;
  margin-top: -15px;
`;

export const HomeLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 12%;
  margin-bottom: 2%;
`;

export const HomeImage = styled.Image``;

export const TripDetailWrapper = styled.View`
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
  font-weight: 400;
  font-size: 45px;
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
  padding-top: 3px;
`;

export const TripItemProfilePicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 10px;
`;

export const TripDetailsProfilePicture = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 10px;
`;

export const TripDetailDetails = styled.Text`
  font-size: 20px;
  margin-top: 20px;
`;

export const TripListItem = styled.View`
  flex-direction: row;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -9px;
`;
