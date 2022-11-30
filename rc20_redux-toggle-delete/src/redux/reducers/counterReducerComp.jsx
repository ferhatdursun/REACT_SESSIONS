// import { DECREMENT, INCREMENT, RESET } from '../types/counterTypes';

// const initialState = {
//   counter: 0,
// };
//!açılan alana (state) mesela counterİlk=0 gibi değişkenle başlangıç değeri yazılır (useState gibi). action içinde action={type,payload} bulundurur. type=> action sayfasından geldi (aranan fonksiyonu bulmak üzere), payload=> burada yok ama o da action sayfasından (mesela inputa girilen veri) payload olarak gönderilecek
const counterReducer = (state1 = {counterSonuc:0}, action1) => {
  //! console.log(action); butonlara bastıktan sonra bak

  switch (action1.type) {
    case "INCREMENT":
      return { counterSonuc: state1.counterSonuc + 1 };
    case "DECREMENT":
      return { counterSonuc: state1.counterSonuc - 1 };
    case "RESET":
      return { counterSonuc: 0,payload: action1.payload};
    default:
      return state1;
  }
};
export default counterReducer;
