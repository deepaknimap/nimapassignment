import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUser: (state, action) => {
     console.log(action.payload);
     state.user = action.payload;
    },
  },
});

export const { logUser } = userSlice.actions;
export default userSlice.reducer;
