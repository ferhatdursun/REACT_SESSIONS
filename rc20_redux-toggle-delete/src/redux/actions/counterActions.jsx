// import { DECREMENT, INCREMENT, RESET } from '../types/counterTypes';

//! esas file dan (counter) buraya fonksiyon için gelindi, burası da fonksiyonun görevini öğrenmek üzere reducer a gidecek

export const increment = () => ( { type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });
export const reset = () => ({ type: "RESET",payload:"SIFIRLANDI" });
