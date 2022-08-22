import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tariffsList: [
    {
      id: 1,
      name: 'monthly',
      text: '',
      price: '$19,90',
      isRecommend: false,
      list: [
        ' + Enjoy on all your devices',
        ' + Watch on two screens',
        ' + Watch anywhere you want',
        ' + Resolution adapted to your device',
      ],
    },
    {
      id: 2,
      name: '6 months',
      text: 'At Infinity & Beyond you will find the best content about space.',
      price: '$18,90',
      isRecommend: true,
      list: [
        '+ Enjoy on all your devices',
        '+ Watch on multiple screens',
        '+ Watch wherever you want',
        '+ Resolution adapted to your device',
        '+ High resolution and 4k quality',
        '+ Create as many profiles as you want',
        '+ Download and watch offline',
      ],
    },
    {
      id: 3,
      name: 'Yearly',
      text: 'At Infinity & Beyond you will find the best content about space.',
      price: '$17,90',
      isRecommend: false,
      list: [
        '+ Enjoy on all your devices',
        '+ Watch on multiple screens',
        '+ Watch wherever you want',
        '+ Resolution adapted to your device',
        '+ High resolution and 4k quality',
        '+ Create as many profiles as you want',
        '+ Download and watch offline',
      ],
    },
  ],
  activeTariff: 0,
};

export const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState,
  reducers: {
    setActiveTariff: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.activeTariff = action.payload;
    },
  },
});

export const { setActiveTariff } = tariffsSlice.actions;

export default tariffsSlice.reducer;
