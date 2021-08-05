import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-left: -8.5px;
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
  margin-bottom: -40px;
`;

export const TripItemTitle = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  margin-bottom: -10px;
  margin-left: -40px;
  text-align: center;
`;

export const TripItemUsername = styled.Text`
  font-size: 13px;
  padding-top: 3px;
  margin-top: 25px;
`;

export const TripDetailUsername = styled.Text`
  font-size: 15px;
  padding-top: 10px;
  margin-top: 25px;
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
  ${"" /* margin-top: 20px; */}
`;

export const TripDetailLocation = styled.Text`
  font-size: 20px;
  margin-top: 40px;
`;

export const TripListItem = styled.View`
  flex-direction: row;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -9px;
`;

export const AddTripTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  margin-left: 10px;
  margin-top: 90px;
`;

export const AddTripLabels = styled.Text`
  font-weight: 500;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 15px;
`;

export const AddTripButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 60px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 30px;
`;

export const AddTripButtonText = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;
export const WishButtonStyling = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 22px;
`;
