import * as React from 'react';
import { About } from './about';
import { BestSongs } from './bestSongs';
import "./homePage.scss"

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <div className='homePage-about-bestSongs'>
      <About/>
      <BestSongs />
    </div>
  );
}
