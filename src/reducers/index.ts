import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PasswordConfigStateI } from '../interface/password-redux';

const initialState: PasswordConfigStateI = {
  password: '',
  length: 0,
  charSet: []
};

const passwordConfigSlice = createSlice({
  name: 'passwordConfig',
  initialState,
  reducers: {
    setPassword: (
      state: PasswordConfigStateI,
      action: PayloadAction<string>
    ) => {
      state.password = action.payload;
    }
  }
});

export const { setPassword } = passwordConfigSlice.actions;

export default passwordConfigSlice.reducer;
