import { users } from '../../src/data';

export default function usersReducer(state = users, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return [...state.filter((item) => item.id !== action.payload.id)];
    case 'EDIT_USER':
      return [
        ...state.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      ];
    case 'SEARCH_BY_NAME':
      return [...users.filter(item => item.name.split(' ') === action.payload.name)];
    default:
      return state;
  }
};
 