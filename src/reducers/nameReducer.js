export const nameReducer = (state, action) => {
  switch (action.type) {
    case "NAME_CHANGED":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
