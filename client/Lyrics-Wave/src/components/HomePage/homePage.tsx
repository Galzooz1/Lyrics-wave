import * as React from 'react';
import { About } from './about';
import { BestSongs } from './bestSongs';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <div>
      <About/>
      <BestSongs />
    </div>
  );
}
