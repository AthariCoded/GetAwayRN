import styled from "styled-components/native";

export const ProfileTitle = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
  margin-left: 10px;
  color: ${(props) => props.theme.mainColor};
`;

export const ProfileTripsLabel = styled.Text`
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const ProfileLabels = styled.Text`
  font-weight: 500;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

export const SaveProfileButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin: 60px;
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 30px;
`;

export const SaveProfileButtonText = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 18px;
`;

export const ProfilePicture = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100px;
  overflow: hidden;
  align-self: center;
  margin-top: 10px;
`;
