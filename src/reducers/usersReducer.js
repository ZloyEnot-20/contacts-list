import { users } from '../../src/data';

export default function usersReducer(state = users, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return [...state.filter(item=> item.id !== action.payload.id)];
    case 'EDIT_USER':
      return [
        ...state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      ];
    default:
      return state;
  }
};
 