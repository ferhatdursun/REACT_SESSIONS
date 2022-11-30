

export const ekleTodo = (payloadText) => 
  ( { type: "EKLETODO", payload: payloadText });
;

export const silTodo = (payload) =>  ({ type: "SİLTODO", payload: payload });

export const toggleTodo = (payload) => {
  return { type: "TOGGLETODO", payload: payload };
};

export const temizleTodo = () => ( { type: "TEMİZLETODO" });
