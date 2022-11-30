const initial = { gorevler: [{ id: 0, text: "Work on Redux" }] };

const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case "EKLETODO":
      return {
        gorevler: [
          ...state.gorevler,
          { id: state.gorevler.length, text: action.payload },
        ],
      };
      
    case "TEMIZLE":
      return initial;

    default:
      return state;
  }
};
export default todoReducer;
