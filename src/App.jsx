import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/Movies";
import WatchList from "./Components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";

const App = () => {
  // use state to make the watchlist:
  const [watchList, setWatchList] = useState([]);

    // Add a movie to the watchlist
    const handleAddtoWatchList = (movieObjects) => {
      const newWatchList = [...watchList, movieObjects];
      localStorage.setItem("IMDBMoviesApp", JSON.stringify(newWatchList));
      setWatchList(newWatchList);
      console.log("Added to WatchList:", newWatchList);
    };
  
    // Remove a movie from the watchlist
    const handleRemoveFromWatchList = (movieObjects) => {
      const filteredWatchList = watchList.filter(
        (movie) => movie.id !== movieObjects.id
      );
      // localStorage.setItem("IMDBMoviesApp", JSON.stringify(filteredWatchList));
      setWatchList(filteredWatchList);
      localStorage.setItem("IMDBMoviesApp", JSON.stringify(filteredWatchList));
      console.log("Removed from WatchList:", filteredWatchList);
    };
  
    // Load watchlist from localStorage on initial render
    useEffect(() => {
      const moviesFromLocalStorage = localStorage.getItem("IMDBMoviesApp");
      if (moviesFromLocalStorage) {
        setWatchList(JSON.parse(moviesFromLocalStorage));
      }
    }, []);

  return (
    <>
      <BrowserRouter>
        <div className="w-[100%] mx-auto border-4 p-6 border-gray-500 rounded-2xl">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Banner />{" "}
                  <Movies
                    watchList={watchList}
                    handleAddtoWatchList={handleAddtoWatchList}
                    handleRemoveFromWatchList={handleRemoveFromWatchList}
                  />{" "}
                </>
              }
            />
            <Route path="/watchlist" element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
