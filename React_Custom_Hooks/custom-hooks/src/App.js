import React from "react";
import { useToggle } from "./myhooks";
import "./App.css";

export function App() {
  const [isOpenDiv, setIsOpenDiv] = useToggle();
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <hr />
      {isOpenDiv && <div>Kutu</div>}
      <button onClick={() => {setIsOpenDiv.onToggle()}}>Göster/Gizle</button>
      <button onClick={() => {setIsOpenDiv.onOpen()}}>Göster</button>
      <button onClick={() => {setIsOpenDiv.onClose()}}>Gizle</button>
    </div>
  );
}

export default App;
