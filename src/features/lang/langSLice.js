import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang:
    typeof window !== "undefined" ? localStorage.getItem("lang") || "EN" : "EN",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", action.payload);
      }
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
