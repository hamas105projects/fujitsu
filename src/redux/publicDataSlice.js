import { createSlice } from "@reduxjs/toolkit";

export const publicDataSlice = createSlice({
  name: "publicData",
  initialState: {
    value: [],
  },
  reducers: {
    setPublicData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPublicData } = publicDataSlice.actions;
export default publicDataSlice.reducer;
