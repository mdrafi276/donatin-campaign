import { useLoaderData, } from "react-router-dom";
import Data from "./Data";
import './Banner.css'
import { useState } from "react";
//  <style>
//    @import
//    url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//  </style>;


const Home = () => {
  const [searchValue, setSearchValue] = useState("")
//  const [searchResult, setSearchResult] = useState([])
  const cards = useLoaderData();
  const handleSubmitfrom =(event) =>{
  event.preventDefault();

  setSearchValue(event.target?.search.value);
  
  }

  const searchResults = cards.filter((item) => item.category === searchValue);
//  setSearchResult(searchResults)
 
  return (
    <div id="image-bg-one " className="   w-[80%]  mx-auto">
      <div className="  h-[400px] w-full  custom-banner">
        <h1
          id="grow-by"
          className="text-center w-full pt-32 text-xl md:text-3xl text-black   "
        >
          I Grow By Helping People In Need{" "}
        </h1>
        <form onSubmit={handleSubmitfrom} >
          <div className="text-center pt-6">
            <div className="join ">
              <input
                name="search"
                className="input  input-bordered w-full md:w-[450px] bg-white join-item"
                placeholder="Search here...."
              />
              <button className="btn join-item   bg-[#FF444A]">
                <input type="submit" value="search" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <Data searchResults={searchResults} cards={cards}></Data>
    </div>
  );
};

export default Home;
