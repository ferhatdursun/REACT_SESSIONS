//!açılan alana (state) mesela counterİlk=0 gibi değişkenle başlangıç değeri yazılır (useState gibi). action içinde action={type,payload} bulundurur. type=> action sayfasından geldi (aranan fonksiyonu bulmak üzere), payload=> burada yok ama o da action sayfasından (mesela inputa girilen veri) payload olarak gönderilecek
const counterReducer = (state1 = { counterSonuc: 0 }, action1) => {
  console.log(action1);

  switch (action1.type) {
    case "RESET":
      return { counterSonuc: 0, payload1: action1.payload1 };
    case "ARTTIR":
      return { counterSonuc: state1.counterSonuc + 1 };
    case "AZALT":
      return { counterSonuc: state1.counterSonuc - 1 };

    default:
      return state1;
  }
};
export default counterReducer;
