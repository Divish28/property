const initialState = {houseData:[],blockedHouse:[]};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, houseData: action.payload };
    case 'BLOCK_HOUSE':
        return{...state,blockedHouse:[...state.blockedHouse,action.payload] }
    case 'DELETE_BLOCKED_HOUSE':
        return{...state,blockedHouse:[state.blockedHouse.filter((e)=>e.id!==action.payload)]}
    default:
      return state;
  }
};