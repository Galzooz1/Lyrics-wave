import * as React from 'react';
import "./songsDisplay.scss"

export interface ISongsDisplayProps {
}

export function SongsDisplay (props: ISongsDisplayProps) {
  return (
  <div className='songsDisplay-main'>
    <div className='songsDisplay-main_container'>
      <h1 className='songsDisplay-main_container_headline'>Best Songs</h1>
      <div className='songsDisplay-main_container_song'>
        <div className='songsDisplay-main_container_song_img-name'>
            <img src='https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg'></img>
            <p>Name of author</p>
        </div>
        <p>Name of song</p>
        <p>First line until it end....</p>
      </div>
    </div>
  </div>
  );
}
