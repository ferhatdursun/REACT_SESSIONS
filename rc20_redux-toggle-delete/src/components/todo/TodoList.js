import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { temizleTodo } from '../../redux/actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoRed.todoList);

  const handleClearList = () => {
    dispatch(temizleTodo());
  };
  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} /> ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
