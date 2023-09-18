import React, { useEffect } from "react";
import About from "./about";
import SongsDisplay from "./songsDisplay";
import "./homePage.scss";
import Hero from "./hero";
// import SongService from "../../services/songService";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { FetchSongList } from "../../services/__generated__/FetchSongList";
import { setSongList } from "./homeSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { makeSelectSongList } from "./selectors";

interface HomepageProps {}

// const actionDispatch = (dispatch: Dispatch) => ({
//   setSongList: (songs: FetchSongList["songs"]) =>
//     dispatch(setSongList(songs)),
// });

// const stateSelector = createSelector(makeSelectSongList, (songList) => ({songList}))

const Homepage: React.FC<HomepageProps> = () => {

  // const {setSongList} = actionDispatch(useAppDispatch())
  // const { songList } = useAppSelector(stateSelector);
  
  // useEffect(() => {
  //   fetchSongs();
  // }, []);

  // const fetchSongs = async () => {
  //   const songList = await SongService.fetchSongList("songs").catch((err) => {
  //     console.log(err);
  //   });
  //   if(songList) {
  //     setSongList(songList);
  //   }
  // };

  return (
    <div>
      <Hero />
      <div className="homePage_songsDisplay">
        {/* <SongsDisplay limitAmount={5} sortMethod={'likes'} /> */}
        <SongsDisplay limitAmount={5} sortMethod={'likes'} />
      </div>
      <div className="homePage_about">
        <About />
      </div>
    </div>
  );
};

export default Homepage;
