import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import Pagination from "./Pagination";
import axios from "axios";

const Movies = ({
  handleAddtoWatchList,
  watchList,
  handleRemoveFromWatchList,
}) => {
  // for the movie and the movie cards:
  const [movie, setMovie] = useState([]);

  // for the page number:
  const [pageNumber, setPageNumber] = useState(1);
  function increasePagenumber() {
    setPageNumber((prev) => prev + 1);
  }

  function decreasePageNumber() {
    setPageNumber((prev) => {
      if (prev <= 1) {
        window.alert("You're already on the first page. Can't go below this.");
        return 1; // Prevent going below 1
      }
      return prev - 1;
    });
  }

  // go to the first page:
  function goToFirstPage() {
    setPageNumber(1);
  }

  // go to the last page:
  function goToLastPage() {
    setPageNumber(500); // assuming 500 is the last page from API
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ffb3256460f7f4c2b41a7644b2bca429&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNumber]);

  return (
    <div className="border-2 border-black rounded-2xl">
      <section className="w-[100%] pt-[2%] p-[3%] mx-auto">
        <div className="w-full mx-auto">
          <div className="text-center font-extrabold text-2xl mb-4">
            Trending Movies
          </div>
          <hr className="text-gray-400 w-[300px] mx-auto text-center" />
        </div>
      </section>

      {/* Shared Grid Container for All Cards */}
      <div className="grid grid-cols-5 gap-4 mt-6 px-8 py-6 bg-gradient-to-tr from-cyan-100 to-gray-200 rounded-2xl">
        {movie.map((movieObjects) => (
          <MovieCards
            movieObjects={movieObjects}
            key={movieObjects.id}
            poster_path={movieObjects.poster_path}
            original_title={movieObjects.original_title}
            handleAddtoWatchList={handleAddtoWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>

      <Pagination
        pageNumber={pageNumber}
        increasePagenumber={increasePagenumber}
        decreasePageNumber={decreasePageNumber}
        page1={goToFirstPage}
        page500={goToLastPage}
      />
    </div>
  );
};

export default Movies;
