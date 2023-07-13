export const newsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEWS':
        return [...state,action.value];
  
      case "REMOVE_NEWS":
        return state.filter(item=>item.id !== action.myid)
      default:
        return state;
    }
  }