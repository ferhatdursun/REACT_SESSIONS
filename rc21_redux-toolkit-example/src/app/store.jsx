import { configureStore } from '@reduxjs/toolkit';
import yetkiSlice from '../features/yetkiSlice';
import newsSlice from '../features/newsSlice';

const store = configureStore({

  //! burada readux için gerekli verileri yazacağım file ların adını belirttim
  reducer: {
    yetkiSlice: yetkiSlice,
    newsSlice: newsSlice,
  },
});
export default store;
