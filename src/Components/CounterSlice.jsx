import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: ''
  },
  reducers: {
    submitForm: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    }
  }
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
