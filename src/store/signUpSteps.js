import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 1,
};

export const signUpStepsSlice = createSlice({
  name: 'signUpSteps',
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeStep = action.payload;
    },
  },
});

export const { setActiveStep } = signUpStepsSlice.actions;

export default signUpStepsSlice.reducer;
