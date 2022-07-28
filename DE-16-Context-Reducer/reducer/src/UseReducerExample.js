import { useReducer } from "react";
// import { reducer, initialState } from "./reducer";
import load from "./img/loading-loading-gif.gif";

const UseReducerExample = () => {
  const reducer1 = (state1, action1) => {
    switch (action1.type) {
      case "START":
        return { ...state1, dog: "", error: "", loading: true };
      case "SUCCESS":
        return { ...state1, dog: action1.payload, error: "", loading: false };
      case "FAIL":
        return { ...state1, dog: "", error: action1.payload, loading: false };
      default:
    }
  };
  const [state, dispatch1] = useReducer(reducer1, {
    loading: false,
    dog: "",
    error: "",
  });
  const { dog, loading, error } = state;

  
  const fetchDog = () => {
    dispatch1({ type: "START" });
    fetch("https://do.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch1({ type: "SUCCESS", payload: data.message });
      })
      .catch(() => {
        dispatch1({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED!" });
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
         disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" />}
      {error && <h2>{error}</h2>}
      {loading && <img src={load} alt="" />}
    </div>
  );
};

export default UseReducerExample;
