import * as React from 'react';
import { About } from './about';
import { BestSongs } from './bestSongs';
import { NewSongs } from './newSongs';
import { Open } from './open';
import { Footer } from './footer';
import { Header } from './header';
import "./homePage.scss"

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
  <div>
      <Header />
      <Open />
      <div className='homePage_bestSongs-newSongs'>
      <BestSongs />
      <NewSongs />
      </div>
      <div className='homePage_about'>
      <About/>
      </div>
      <Footer />
  </div>
  );
}
