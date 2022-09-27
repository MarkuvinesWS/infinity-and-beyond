import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  steps: [
    { id: 1, text: 'Step 1' },
    { id: 2, text: 'Step 2' },
    { id: 3, text: 'Step 3' },
  ],
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
