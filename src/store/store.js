import { configureStore } from '@reduxjs/toolkit';
import tariffsReducer from './tariffs';
import signUpStepsReducer from './signUpSteps';
import signUpFormSliceReducer from './signUpForm';

export default configureStore({
  reducer: {
    tariffs: tariffsReducer,
    steps: signUpStepsReducer,
    signUpForm: signUpFormSliceReducer,
  },
});
