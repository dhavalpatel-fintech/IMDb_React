import React, { useState, useEffect } from "react";
import GenreId from "./Genre";

const WatchList = ({ watchList, setWatchList, handleRemoveFromWatchList}) => {
  // Search input state
  const [search, setSearch] = useState("");

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Genre list state
  const [genreList, setGenreList] = useState(["All Genres"]);

  // Currently selected genre
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  // Update genre list whenever the watch list changes
  useEffect(() => {
    const genres = watchList.map((movieObjects) => GenreId[movieObjects.genre_ids?.[0]]);
    const uniqueGenres = ["All Genres", ...new Set(genres)];
    setGenreList(uniqueGenres);
  }, [watchList]);

  // Handle genre filter click
  const handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  // Sort movieObjects by rating (increasing)
  const sortIncreasing = () => {
    const sorted = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sorted);
  };

  // Sort movieObjects by rating (decreasing)
  const sortDecreasing = () => {
    const sorted = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sorted);
  };

  // Filtered watch list based on genre + search
  const filteredList = watchList.filter((movieObjects) => {
    const genre = GenreId[movieObjects.genre_ids?.[0]];
    return (
      (currentGenre === "All Genres" || genre === currentGenre) &&
      movieObjects.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="w-full pt-8 p-6 mx-auto mt-10">
      {/* Genre Filter Buttons */}
      <div className="flex justify-center flex-wrap mb-8">
        {genreList.map((genre, index) => (
          <button
            key={index}
            onClick={() => handleFilter(genre)}
            className={`h-[3rem] px-4 text-white text-2xl font-medium border p-2 rounded-xl m-2 hover:cursor-pointer hover:text-black ${
              currentGenre === genre
                ? "bg-blue-400 hover:bg-blue-500/60"
                : "bg-gray-600 hover:bg-blue-500/60"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center my-6">
        <input
          className="w-[450px] h-[50px] border-2 border-black rounded-2xl p-4 bg-gray-200"
          placeholder="Search a movieObjects..."
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* movieObjects Table */}
      <div className="w-full flex justify-center rounded-lg border-2 border-black overflow-x-auto mt-8">
        <table className="w-full text-gray-700 text-center">
          <thead className="border-b h-[3rem]">
            <tr>
              <th>#</th>
              <th>Poster</th>
              <th>Title</th>
              <th>
                <div className="flex justify-center items-center gap-2">
                  <i onClick={sortIncreasing} className="fa-solid fa-arrow-up hover:cursor-pointer" />
                  <span>Rating</span>
                  <i onClick={sortDecreasing} className="fa-solid fa-arrow-down hover:cursor-pointer" />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((movieObjects, index) => (
              <tr key={movieObjects.id} className="h-[3rem] border-t border-gray-200">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movieObjects.poster_path}`}
                    alt={movieObjects.title}
                    className="w-20 h-auto my-2.5 mx-auto rounded hover:scale-105 transition-all duration-300"
                  />
                </td>
                <td>{movieObjects.original_title}</td>
                <td>{movieObjects.vote_average}</td>
                <td>{movieObjects.popularity}</td>
                <td>{GenreId[movieObjects.genre_ids?.[0]] || "N/A"}</td>
                <td
                  onClick={() => handleRemoveFromWatchList(movieObjects)}
                  className="hover:text-red-600 cursor-pointer"
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No movieObjectss found */}
      {filteredList.length === 0 && (
        <div className="text-center text-xl text-gray-500 mt-8">No movieObjectss found.</div>
      )}
    </section>
  );
};

export default WatchList;

