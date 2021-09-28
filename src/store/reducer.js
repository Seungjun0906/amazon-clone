export const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
        totalAmount: state.totalAmount++,
        totalPrice: state.totalPrice + action.item.price,
      };
  }
};

export default reducer;
