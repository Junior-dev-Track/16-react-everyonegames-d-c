import React, { useState, useEffect } from 'react';
import Header from '../layout/Header.jsx';
import SearchBar from '../layout/SearchBar';
import NewRelease from '../layout/NewRelease.jsx';
//import NewRelease from "../../Components/HomePage/NewRelease/NewRelease.jsx";
//import TopGames from "../../Components/HomePage/TopGames/TopGames.jsx";
//import EpicGamesHeader from "../../Components/Header/Header.jsx";
//import EpicGamesSearchBar from "../../Components/SearchBar/SearchBar.jsx";
//import GamesCarousel from "../../Components/HomePage/GamesCarousel/GamesCarousel.jsx";

function HomePage() {




  return (
    <>
      <Header />
      <SearchBar />
      <NewRelease />
    </>
  );

}

export default HomePage;