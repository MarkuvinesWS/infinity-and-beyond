import { configureStore } from '@reduxjs/toolkit';
import tariffsReducer from './tariffs';

export default configureStore({
  reducer: {
    tariffs: tariffsReducer,
  },
});
