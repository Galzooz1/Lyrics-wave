import * as React from 'react';
import { About } from './About';
import { BestSongs } from './BestSongs';

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
