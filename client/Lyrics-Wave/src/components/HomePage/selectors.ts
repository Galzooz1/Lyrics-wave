import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../../types";

const selectHome = (state: IRootState) => state.home;

export const makeSelectSongList = createSelector(selectHome, (home) => home.songList);
export const makeSelectTopLikedSongs = createSelector(selectHome, (home) => home.topLikedSongs);
export const makeSelectTopDateSongs = createSelector(selectHome, (home) => home.topDateSongs);