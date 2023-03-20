// import { toast } from "react-toastify";
// import { cartActions } from "./cartSlice";

// export const fetchCartData = (localId) => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       // console.log("1",localId)
//       const response = await fetch(
//         "https://react-dhaba-9da05-default-rtdb.firebaseio.com/" +
//           localId +
//           "/cart" +
//           "/.json"
//       );
//       if (!response.ok) {
//         toast.error("Could not fetch cart data");
//       }
//       const data = await response.json();
//       console.log(data);
//       return data;
//     };
//     try {
//       const cartData = await fetchData();
//       console.log(cartData);
//       dispatch(
//         cartActions.replaceCart({
//           Items: cartData.Items || [],
//           totalQuantity: cartData.totalQuantity,
//           totalAmount: cartData.totalAmount,
//           orderedList: cartData.orderedList || [],
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// export const sendCartData = (cart, localId) => {
//   return async () => {
//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://react-dhaba-9da05-default-rtdb.firebaseio.com/" +
//           localId +
//           "/cart" +
//           "/.json",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             Items: cart.Items,
//             totalQuantity: cart.totalQuantity,
//             totalAmount: cart.totalAmount,
//             orderedList: cart.orderedList,
//           }),
//         }
//       );
//       if (!response.ok) {
//         toast.error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
