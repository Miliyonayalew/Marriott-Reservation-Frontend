import { configureStore } from '@reduxjs/toolkit';

import auth from './reducer/Auth/auth';
import roomsReducer from './reducer/Rooms/roomSlice';

const store = configureStore({
  reducer: {
    auth,
    rooms: roomsReducer,
  },
});

export default store;
