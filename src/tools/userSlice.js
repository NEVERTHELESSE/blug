import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  user: {
    id: "",
    username: "neverthelesse",
    profilePics: "",
  },
};

const userSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    update: (state, actions) => {
      state.theme = actions.payload.theme;
      state.user = actions.payload.user;
    },
  },
});
export const { update } = userSlice.actions;
export default userSlice.reducer;
