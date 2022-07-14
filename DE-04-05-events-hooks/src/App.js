import React from "react";
import Event from "./1-events-hooks_intro/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import Hooks from "./2-hooks/Hooks";
import MouseKeyboard from "./4-mouse_keyBoard/MouseKeyboard";
const App = () => {
  return (
    <div>
      <Event />
      <Hooks />
      <Form />
      <MouseKeyboard/>
    </div>
  );
};

export default App;
