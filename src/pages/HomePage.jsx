import React, { useState, useEffect } from 'react';
import Header from '../layout/Header.jsx';
import SearchBar from '../layout/SearchBar.jsx';
import NewRelease from '../layout/NewRelease.jsx';
import Aside from '../layout/Aside.jsx'

function HomePage() {




  return (
    <>
      <Header />
      <Aside />
      <NewRelease />
    </>
  );

}

export default HomePage;