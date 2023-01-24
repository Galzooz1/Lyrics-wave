import * as React from 'react';
import "./BestSongs.scss"

export interface IBestSongsProps {
}

export function BestSongs (props: IBestSongsProps) {
  return (
    <div className='best-songs-main'>
      <h1 className='best-songs-main_headline'>Best Songs</h1>
      <div className='best-songs-main_song'>
        <div className='best-songs-main_song_img-name'>
            <img src='https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg'></img>
            <p>Name of author</p>
        </div>
        <p>Name of song</p>
        <p>First line until it end....</p>
      </div>
    </div>
  );
}
