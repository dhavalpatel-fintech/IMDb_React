import React from "react";
import WatchList from "./WatchList";

const MovieCards = ({
  poster_path,
  original_title,
  handleAddtoWatchList,
  movieObjects,
  handleRemoveFromWatchList,
  watchList
}) => {

  // function to make a toggling effect:
  function doesContain(movieObjects){
    for(let i=0; i<watchList.length; i++){
      if(watchList[i].id === movieObjects.id){
        return true;
      }
    }
    return false;
  }

  const isInWatchList = doesContain(movieObjects);
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[350px] w-full hover:scale-105 transition-all duration-500 shadow-lg shadow-gray-200"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        {isInWatchList ? 
          (<button
            onClick={() => handleRemoveFromWatchList(movieObjects)}
            className="absolute top-4 right-4 flex h-8 w-8 bg-gray-900/60 justify-center items-center rounded-lg hover:bg-gray-200/20 hover:scale-110 transition-transform cursor-pointer"
          >
            &#128545;
          </button>)
          :
          (<button
            onClick={() => handleAddtoWatchList(movieObjects)}
            className="absolute top-4 right-4 flex h-8 w-8 bg-gray-900/60 justify-center items-center rounded-lg hover:bg-gray-200/20 hover:scale-110 transition-transform cursor-pointer"
          >
            &#128525;
          </button>)
      }
      </div>
      <div className="absolute w-full text-center text-2xl font-bold rounded bottom-0 text-white bg-black/60">
        {original_title}
      </div>
    </div>
  );
};

export default MovieCards;
