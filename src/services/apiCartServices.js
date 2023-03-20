class apiCartServices {
  BASE_URL = "https://restaurant-app-aa148-default-rtdb.firebaseio.com/";
  static getInstance() {
    return new apiCartServices();
  }

  addItemToCart = async (data) => {
    const localId = data.localId;
    const cartItem = data.newCart;
    const response = await fetch(this.BASE_URL + localId + "/cart.json", {
      method: "PUT",
      body: JSON.stringify({
        Items: cartItem.Items,
        orderedList: cartItem.orderedList,
        totalQuantity: cartItem.totalQuantity,
        totalAmount: cartItem.totalAmount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data2 = await response.json();
      alert("Sending Data failed");
    }
  };
  sendOrderSummary = async (data) => {
    const localId = data.localId;
    const orderedList = data.orderedList;
    const response = await fetch(
      this.BASE_URL + localId + "/orderSummary.json",
      {
        method: "PUT",
        body: JSON.stringify({
          orderedList: orderedList,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data2 = await response.json();
      alert("Sending data failed");
    }
  };

  getCartItem = async (localId) => {
    const response = await fetch(this.BASE_URL + localId + "/cart.json", {
      method: "GET",
      headers: {
        "Content-Type": "Apllication/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const newData = {
        Items: data.Items || [],
        totalQuantity: data.totalQuantity,
        totalAmount: data.totalAmount,
      };
      return newData;
    } else {
      const data2 = await response.json();
      alert("Getting data failed..");
    }
  };
  getOrderSummary = async (localId) => {
    const response = await fetch(
      this.BASE_URL + localId + "/orderSummary.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "Apllication/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      const newData = {
        orderedList: data.orderedList || [],
      };
      return newData;
    } else {
      const data2 = await response.json();
      alert("Getting data failed..");
    }
  };
}
export const ApiCartServices = apiCartServices.getInstance();
