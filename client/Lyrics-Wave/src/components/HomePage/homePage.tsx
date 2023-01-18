import * as React from 'react';
import Header from './header';
import './homePage.scss';

interface IHomePageProps {
}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className='home'>
        <Header />
    </div>
  );
};

export default HomePage;
