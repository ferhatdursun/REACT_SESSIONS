import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 import axios from 'axios';

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenmesini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirime middleware denilir. Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.


const API_KEY = '02d142c50d8b4247b974b25323435174';

export const getData = createAsyncThunk(
 'newsSlice/getData', //!action type ismi sayfanın adı/fonk adı

 //!async callback fonk
  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

      const  data  = await axios(url);
 // console.log(data);
 return data.data.articles;
 
  }
 )



// name=store da verdiğim isim
const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    newsList: [],
    loading: true,
  },
  reducers: {
    clearList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
        
      });
  },
});//! baska slice'lardaki tanimlanan action'lara cevap vermek
//! bilhassa createAsyncThunk tarafindan olusturulan action'lara
//! cevap vermek icin kullanilir.


export const { clearList } = newsSlice.actions;

export default newsSlice.reducer;

