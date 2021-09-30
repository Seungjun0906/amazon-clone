export const initialState = {
  cartItems: [],
  user: null,
  // itemAmount: null,
};

export const getTotalAmount = (cartItems) =>
  cartItems?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cartItems.findIndex((item) => item.id === action.id);

      let newCartItems = [...state.cartItems];

      if (index >= 0) {
        newCartItems.splice(index, 1);
      } else {
        console.warn(
          `cant't remove product (id:${action.id}) as it's not in cart!`
        );
      }
      return {
        ...state,
        cartItems: newCartItems,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
