import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
} from '../../redux/actions/counterActions';
// import {
//   decrement,
//   increment,
//   reset,
// } from '../../redux/reducers/toplu';


const Counter = () => {
  //!App.js den buraya geldik, burada Action file ında yazılan  fonk.veya state i kullanabilmek için, useDispatch (sevk), ekrana bastırmak için useSelector. önce action a git
  const dispatch = useDispatch();

    //! const rootReducer = combineReducers({
    //!   counterRed: counterReducer,
    //!   todoRed: todoReducer, });
   
  const counter1 = useSelector((state) => state.counterRed.counterSonuc);
  const count = useSelector((state) => state.counterRed.payload);
// const counter1 = useSelector((state) => state.counterIlk);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter1}</h1>
    <h2 style={{color: 'red'}}>{count}</h2>  
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: 'INCREMENT' })}
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: 'RESET' })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: 'DECREMENT' })}
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
