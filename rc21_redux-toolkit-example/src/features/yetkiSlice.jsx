import { createSlice } from "@reduxjs/toolkit";

//? createSlice, Redux state lojiğini kisa yoldan tanimlamak icin kullanilan bir metotdur.
//? slice : ismi, state'lerin baslangic degerleri ve reducer'lari key-value yapisi seklinde tanimlar.
//? reducer, state'i degistiren fonksiyonlarin yaninda otomatik olarak action type'larin tanimlanmasini da saglar.

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    kullanici: {},
    //! kullanici adında değişken usestate le yapmış gibi
  },
  reducers: {
    //!setter lar=> updateKullanici=state te tanımladığın kullanici, props la gelen veri (action.payload )olsun
    olusturKullanici: (state, action) => {
      //!!!! state.kullanici=email,password gelmeli submitle inputlardan
      state.kullanici = action.payload;
      // console.log(state.kullanici);
      // console.log(action.payload);
      // action.payload={email,pasword}
    },
    silKullanici: (state) => {
      state.kullanici = "";
    },
  },
});
//!fonksiyonları tek tek dışarı aç, en altta tüm sayfayı aç
export const { olusturKullanici, silKullanici } = yetkiSlice.actions;
export default yetkiSlice.reducer;
