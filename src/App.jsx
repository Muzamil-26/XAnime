// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import TopLoadingBar from "./Components/Loadingbar";

import "./App.css";
// import { Await, defer, useLoaderData } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/main1";
import Footer from "./Components/Footer";

function App() {
  const [searchanime, setsearchanime] = useState([]);
  const [animedata, setanimedata] = useState([]);
  const [isloading, setloading] = useState(false);
  const [isloaderhome,setloaderhome]=useState(false);
  // const [three,setthree]=useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const gettopAnime = async () => {
    setLoadingProgress(20);
    const data = await fetch(`https://api.jikan.moe/v4/top/anime`);
    setLoadingProgress(40);
    const res = await data.json();

    console.log(res.data);
    setLoadingProgress(60);
    setanimedata(res.data);
    setloading(true);
    setloaderhome(true);
    setLoadingProgress(100);
  };

  const getsearch = async (searchanime) => {
    setLoadingProgress(20);
    setloading(false);
    setLoadingProgress(40);
    const data = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchanime}&limit=25`
    );
    const res = await data.json();
    setLoadingProgress(60);
    console.log(res.data);

    setanimedata(res.data);
    setloading(true);
    setLoadingProgress(100);
  };

  // const action=async(three)=>{
  //   // three.preventDefault();
  //   setloading(false);
  //   const data = await fetch(
  //     `https://api.jikan.moe/v4/anime?q=${three}&limit=25`
  //   );
  //   const res = await data.json();

  //   console.log(res.data);

  //   setanimedata(res.data);
  //   setloading(true);
  // }



  const getanimesearch = (e) => {
    e.preventDefault();
    console.log(e);
    getsearch(searchanime);
  };

  // const onload=()=>{

  // }

  useEffect(() => {
    // setloaderhome(false);
    gettopAnime();
    // setloaderhome(true);
  }, []);

  return (
    <>
    <TopLoadingBar progress={loadingProgress}/>
      {isloaderhome ? (
        <>
        
          <Navbar
            searchanime={searchanime}
            setsearchanime={setsearchanime}
            isloading={isloading}
            getanimesearch={getanimesearch}
            getsearch={getsearch}
          />

          <Main
            animedata={animedata}
            isloading={isloading}
            key={animedata.mal_id}
          />

          <Footer></Footer>
        </>
      ) : 
        <>
          <div className="main-width-loader">
            <div className="loader"></div>
          </div>
        </>
      }
    </>
  );
}

export default App;
