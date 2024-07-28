// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import TopLoadingBar from "./Loadingbar";

// import "./";
// import { Await, defer, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./main1";
import Footer from "./Footer";

function action() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [searchanime, setsearchanime] = useState([]);
  const [animedata, setanimedata] = useState([]);
  const [isloading, setloading] = useState(false);
  // const [isloaderhome,setloaderhome]=useState(false);
  // const [,setthree]=useState([]);

  // const gettopAnime = async () => {
  //   setLoadingProgress(20);
  //   const data = await fetch(`https://api.jikan.moe/v4/top/anime`);
  //   setLoadingProgress(40);
  //   const res = await data.json();

  //   console.log(res.data);
  //   setLoadingProgress(60);
  //   setanimedata(res.data);
  //   setloading(true);
  //   setloaderhome(true);
  //   setLoadingProgress(100);
  // };

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
    // setloaderhome(true);
    // setloaderhome(true);
    setTimeout(()=>{
      setLoadingProgress(100);
    },500)
    
  };




  const getanimesearch = (e) => {
    e.preventDefault();
    console.log(e);
    getsearch(searchanime);
  };

  // const onload=()=>{

  // }

  useEffect(() => {
    // setloaderhome(false);
    // gettopAnime();
    getsearch('action');
    // setloaderhome(true);
  }, []);

  return (
    <>
      {isloading ? (
        <>
        <TopLoadingBar progress={loadingProgress}/>
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

export default action;



