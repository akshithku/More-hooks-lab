export const initialState = {
    item: []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "push":
        return {
          ...state,
          item: [...state.item, action.textToBePrinted]
        };

        
      default:
        return state;
    }
  };
  