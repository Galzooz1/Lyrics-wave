import React, { Fragment, useEffect } from "react";
import "./songsDisplay.scss";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { topSongs, topSongs_topSongs } from "../../services/__generated__/topSongs";
import { setTopLikedSongs, setTopDateSongs } from "./homeSlice";
import { fetchTopSongs } from "../../services/songService";
import {  makeSelectTopLikedSongs, makeSelectTopDateSongs } from "./selectors";

interface SongsDisplayProps {
  limitAmount: Number,
  sortMethod: String,
}

const actionDispatch = (dispatch: Dispatch) => ({
  setTopLikedSongs: (topLikedSongs: topSongs | null) => dispatch(setTopLikedSongs(topLikedSongs)),
});

const stateSelector = createSelector(makeSelectTopLikedSongs, (topLikedSongs) => ({
  topLikedSongs,
}));

const SongsDisplay: React.FC<SongsDisplayProps> = ({limitAmount, sortMethod}) => {
  const { setTopLikedSongs } = actionDispatch(useAppDispatch());
  const { topLikedSongs } = useAppSelector(stateSelector);

  const fetchSongs = async(limitAmount: Number, sortMethod: String) => {
    let [topSongsData, topSongsLoading, topSongsError] = await fetchTopSongs(limitAmount, sortMethod)
    console.log('topSongsData', topSongsData);
    console.log('topSongsLoading',topSongsLoading);
    console.log('topSongsError',topSongsError);
    
    if(topSongsData) {
      setTopLikedSongs(topSongsData)
    }
    if(topSongsLoading) return <div>Loading...</div>
  }

console.log(topLikedSongs ? topLikedSongs : null)
// else if(loading) return loading;
// else if(error) return error;

  // useEffect(() => {
    fetchSongs(limitAmount, sortMethod);
    // console.log('work');
  // }, []);


  // console.log(topSongs);

  return (
    <div className="songsDisplay-main">
      <div className="songsDisplay-main_container">
        <h1 className="songsDisplay-main_container_headline">Best Songs</h1>
        <div className="songsDisplay-main_container_song">
          <div className="songsDisplay-main_container_song_img-name">
            <img src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"></img>
            <p>Name of author</p>
          </div>
          {topLikedSongs &&
            topLikedSongs?.topSongs?.length &&
            topLikedSongs?.topSongs?.map((song, i) => {
              return (
                <Fragment key={song?.id}>
                  <p key={song?.id}>{song?.title}</p>
                  {/* {song?.lyrics?.map((lyric) => {
                    return <p key={lyric?.id}>{lyric}</p>;
                  })} */}
                </Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SongsDisplay;
