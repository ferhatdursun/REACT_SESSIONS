import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
 import { temizle } from '../../redux/actions/todoActions';

const TodoList = () => {
  const gorevler1 = useSelector((state) => state.todoReducer.gorevler);
  const dispatch=useDispatch()
const clearTodo=()=>{
  dispatch(temizle()) 
}
  return (
    <div>
      <div>
        {gorevler1.map((gorev) => (
          <TodoItem key={gorev.id} gorev={gorev} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={clearTodo} className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
