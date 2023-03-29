const initialState = {houseData:[],blockedHouse:[],bookedHouse:[]};

export const blocklist = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, houseData: action.payload };
    case 'BLOCK_HOUSE':
        return{...state,blockedHouse:[...state.blockedHouse,action.payload] }
    case 'DELETE_BLOCKED_HOUSE':
        return{...state,blockedHouse:[state.blockedHouse.filter((e)=>e.id!==action.payload)]}
    case 'BOOK_HOUSE':
      return{...state,bookedHouse:[...state.bookedHouse.filter((e)=>e.id!==action.payload),action.payload] }
    default:
      return state;
  }
};