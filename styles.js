import styled from "styled-components/native";

export const HomeBackground = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 50px;
  font-family: "URW Chancery L, cursive";
  text-align: center;
  font-weight: bold;
  align-items: "center";
`;
export const ButtonLogin = styled.View`
  width: 165px;
  height: 35px;
  border-radius: 4px;
  background: #ffc0cb;

  color: ${(props) => props.theme.black};
  border: 0px transparent;
  text-align: center;
  margin: 5px;

  &:hover {
    background: #3b5998;
    opacity: 0.6;
  }
`;
export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 22px;
`;

export const UpdateButtonStyle = styled.Text`
  color: ${(props) => props.theme.pink};
`;
