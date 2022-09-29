import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTariff: null,
  personalData: {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  },
  cardsData: {
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
    cpf: '',
  },
};

export const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState,
  reducers: {
    getActiveTariff: (state) => state.activeTariff,
    setActiveTariff: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeTariff = action.payload;
    },
    setFirstName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.personalData.first_name = action.payload;
    },
    setLastName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.personalData.last_name = action.payload;
    },
    setEmail: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.personalData.email = action.payload;
    },
    setPassword: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.personalData.password = action.payload;
    },
    setCardHolderName: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cardsData.cardHolderName = action.payload;
    },
    setCardNumber: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cardsData.cardNumber = action.payload;
    },
    setExpirationDate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cardsData.expirationDate = action.payload;
    },
    setCVV: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cardsData.cvv = action.payload;
    },
    setCPF: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cardsData.cpf = action.payload;
    },
  },
});

export const {
  setActiveTariff,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setCardHolderName,
  setCardNumber,
  setExpirationDate,
  setCVV,
  setCPF,
} = signUpFormSlice.actions;

export default signUpFormSlice.reducer;
