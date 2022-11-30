import { useState } from "react";
import { useDispatch } from "react-redux";
import { ekleTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ekleTodo(text));
    //!action daki ekleTodo metoduna git
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        // onChange={(e) => setText(e.target.value)}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
