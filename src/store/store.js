import { configureStore } from '@reduxjs/toolkit';
import tariffsReducer from './tariffs';
import signUpStepsReducer from './signUpSteps';

export default configureStore({
  reducer: {
    tariffs: tariffsReducer,
    steps: signUpStepsReducer,
  },
});
