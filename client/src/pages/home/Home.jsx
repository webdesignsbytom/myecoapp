import React from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import About from '../../components/about/About';
import Header from '../../components/header/Header';
import Navbar from '../../components/nav/Navbar';

function Home() {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <Navbar />
      ) : (
        <div className='dark:bg-black'>
          <Navbar />
          <Header />
          <About />
        </div>
      )}
    </>
  );
}

export default Home;
