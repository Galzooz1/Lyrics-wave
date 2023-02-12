import * as React from 'react';
import { About } from './about';
import { SongsDisplay } from './songsDisplay';
import { Footer } from './footer';
import { Header } from './header';
import "./homePage.scss"

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
  <div>
        <Header />
      <div className='homePage_open-section'>
        <h1>Writing Creating Together</h1>
        <button className='homePage_open-section_start-button'>Start writing</button>
      </div>
      <div className='homePage_bestSongs-newSongs'>
        <SongsDisplay />
      </div>
      <div className='homePage_about'>
        <About/>
      </div>
        <Footer />
  </div>
  );
}
