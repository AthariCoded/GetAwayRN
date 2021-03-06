import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export const PlaneButtonStyled = styled(FontAwesome5)`
  color: ${(props) => props.theme.pinkColor};
  margin-right: 10px;
`;
export const WishTextStyled = styled.Text`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 20px;
  align-self: center;
`;
export const AntDesignIcon = styled(AntDesign)`
  color: ${(props) => props.theme.red};
`;
