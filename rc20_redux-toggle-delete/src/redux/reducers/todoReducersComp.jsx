

const initialState = {
  todoList: [
    { id: 0, text: 'Work On Redux'},
  ],
};

const todoReducer = (state = initialState, action) => {
  //! console.log(action); kişi ekledikten sonra bak

  switch (action.type) {
    case 'EKLETODO':
      return {
        todoList: [
          ...state.todoList,
          { id: state.todoList.length, text: action.payload },
        ],
      };
   
    case "TOGGLETODO":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "SİLTODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };

    case 'TEMİZLETODO':
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
