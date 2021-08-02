// import Modal from "react-modal";
// // state
// import { useState } from "react";
// //styles
// import { CreateButtonStyled } from "../../styles";
// import tripStore from "../../stores/tripStore";
// const TripModal = (props) => {
//   const [trip, setTrip] = useState(
//     props.oldTrip
//       ? props.oldTrip
//       : {
//           name: "",

//           description: "",
//           image: "",
//         }
//   );
//   const handleUpdateTrip = async () => {
//     await tripStore.tripUpdate(trip, navigation);
//     console.log(trip);
//   };

//   const navigation = useNavigation();
//   console.log(authStore.user);
//   if (authStore.user) {
//   } else {
//     Alert.alert(
//       "You must have an account",
//       "You need to sign in to continue.",
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         { text: "Sign in", onPress: () => navigation.navigate("Signin") },
//       ],
//       { cancelable: false }
//     );
//   }
//   const handleChange = (event) => {
//     setTrip({ ...trip, [event.target.name]: event.target.value });
//   };

//   const handleImage = (event) => {
//     setTrip({ ...trip, image: event.target.files[0] });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (props.oldTrip) tripStore.tripUpdate(trip);
//     else tripStore.tripCreate(trip);
//     props.closeModal();
//   };
//   return (
//     <div>
//       <Modal
//         isOpen={props.isOpen}
//         onRequestClose={props.closeModal}
//         contentLabel="Trip Modal"
//       >
//         <h1>Add new trip</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group row">
//             <div className="col-6">
//               <label>Name</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 onChange={handleChange}
//                 name="name"
//                 value={trip.name}
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Description</label>
//             <input
//               className="form-control"
//               type="text"
//               onChange={handleChange}
//               name="description"
//               value={trip.description}
//             />
//           </div>
//           <div className="form-group">
//             <label>Image</label>
//             <input
//               className="form-control"
//               type="file"
//               onChange={handleImage}
//               name="image"
//             />
//           </div>
//           <CreateButtonStyled>
//             {props.oldTrip ? "Update" : "Add Trip"}
//           </CreateButtonStyled>
//         </form>
//       </Modal>
//     </div>
//   );
// };
// export default TripModal;
