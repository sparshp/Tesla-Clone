import { configureStore } from '@reduxjs/toolkit';
import carRenderer from '../features/car/carSlice'

export const store = configureStore({
  reducer: {
    car:carRenderer,
  },
});
