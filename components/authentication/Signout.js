// import React from "react";
// import { Alert } from "react-native";
// import { Button } from "native-base";
// import authStore from "../../stores/authStore";

// const Signout = ({ navigation }) => {
//   const handleSignout = () => {
//     authStore.signout();
//     Alert.alert("Success!", "Signin ?", [
//       {
//         text: "No",
//         style: "cancel",
//       },
//       { text: "Signin", onPress: () => navigation.navigate("Signin") },
//     ]);
//   };
//   return (
//     <Button
//       onPress={authStore.user ? handleSignout : () => alert("Not logged in!")}
//     >
//       Signout
//     </Button>
//   );
// };
// export default Signout;
