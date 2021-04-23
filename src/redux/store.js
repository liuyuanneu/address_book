/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
