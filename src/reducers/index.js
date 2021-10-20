import { initialState } from "../store";

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVORITES":
      return {
        ...state,
        companies: {
          ...state.companies,
          favorites: [...state.companies.favorites, action.payload],
        },
      };
    case "REMOVE_COMPANY_FROM_FAVORITES":
      return {
        ...state,
        companies: {
          ...state.companies,
          favorites: state.companies.favorites.filter(
            (company, index) => index !== action.payload
          ),
          // products: [...state.cart.products.slice(0, action.payload), ...state.cart.products.slice(action.payload + 1)]
          // both of these strategies do the same result! choose you favourite :)
        },
      };
    default:
      return state;
  }
};
