import { createSlice } from "@reduxjs/toolkit";
import { IHomeState } from "./types";

const initialState: IHomeState = {
  songList: null,
  topLikedSongs: null,
  topDateSongs: null
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSongList(state, action) {
      state.songList = action.payload;
    },
    setTopLikedSongs(state, action) {
      state.topLikedSongs = action.payload;
    },
    setTopDateSongs(state, action) {
      state.topDateSongs = action.payload;
    },
  },
});

export const { setSongList, setTopLikedSongs, setTopDateSongs } = HomeSlice.actions;
export default HomeSlice.reducer;
