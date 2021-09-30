export const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
        totalQuantity: state.totalQuantity++,
        totalPrice: state.totalPrice + action.item.price,
      };
    case "REMOVE_FROM_CART":
      const index = state.cartItems.findIndex((item) => item.id === action.id);

      let newCartItems = [...state.cartItems];
      let newTotalPrice = state.totalPrice;

      if (index >= 0) {
        newCartItems.splice(index, 1);
        newTotalPrice -= state.cartItems[index].price;
      } else {
        console.warn(
          `cant't remove product (id:${action.id}) as it's not in cart!`
        );
      }
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
  }
};

export default reducer;
