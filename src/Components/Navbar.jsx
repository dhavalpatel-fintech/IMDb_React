import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="w-full h-[80px] flex justify-center items-center px-6 border-b-2 shadow-sm overflow-x-auto">
      {/* 1 - Logo & Links */}
      <div className="flex items-center space-x-4 shrink-0">
        <a href="/">
          <img className="w-[90px] h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
        </a>
        <Link to="/">
          <h1 className="text-[24px] font-extrabold text-blue-950 p-2 hover:scale-110 transition duration-300 whitespace-nowrap">
            Movies
          </h1>
        </Link>
        <Link to="/watchlist">
          <h1 className="text-[24px] font-extrabold text-blue-950 p-2 hover:scale-110 transition duration-300 whitespace-nowrap">
            Watchlist
          </h1>
        </Link>
      </div>

      {/* 2 - Menu + Search */}
      <div className="flex items-center space-x-6 min-w-[400px] flex-1 justify-center">
        <button className="flex items-center space-x-2 text-xl cursor-pointer hover:bg-gray-300/30 px-2 hover:rounded-md py-2">
          <i className="fa-solid fa-bars"></i>
          <h3 className="font-medium text-xl mb-1 whitespace-nowrap">Menu</h3>
        </button>

        <div className="flex w-[80%] items-center border-2 rounded-md h-[50px] overflow-hidden justify-between">
          <select className="m-2 bg-gray-100 outline-none text-center border border-gray-200 p-2 rounded-md" name="Genre" id="Genre">
            <option value="all">All</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
          </select>

          <input
            type="text"
            className="w-[650px] h-[35px] p-2 outline-none border border-gray-300 rounded-md bg-gray-200 hover:cursor-text"
            placeholder="Search a movie..."
          />

          <div className="m-1 p-2 bg-gray-300 rounded-md w-[40px] h-[35px] hover:bg-gray-400 hover:scale-90 transition duration-300 flex justify-center items-center">
            <button className="text-md cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 3 - IMDBPro + SignIn/Up + Lang */}
      <div className="flex items-center space-x-6 shrink-0">
        <a href="#" className="text-center mt-2">
          <img className="w-[85px] h-[20px]" src="https://www.pngkey.com/png/full/343-3433325_imdb-pro-logo-imdbpro-logo.png" alt="IMDB Pro" />
          <p className="text-xs space-x-2">an Amazon Co.</p>
        </a>

        <div className="w-[2px] h-10 bg-gray-400"></div>

        <div className="flex space-x-3">
          <button className="bg-amber-300 text-black font-bold px-3 py-2 rounded-lg whitespace-nowrap hover:bg-blue-300 transition duration-300">
            Sign In
          </button>
          <button className="bg-amber-300 text-black font-bold px-3 py-2 rounded-lg whitespace-nowrap hover:bg-blue-300 transition duration-300">
            Sign Up
          </button>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <h3 className="text-lg font-bold">EN</h3>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
