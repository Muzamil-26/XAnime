// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react';
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';

// import "./";
import TopLoadingBar from "./Loadingbar";
// import { Await, defer, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./main1";
import Footer from "./Footer";

function adventure() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [searchanime, setsearchanime] = useState([]);
  const [animedata, setanimedata] = useState([]);
  const [isloading, setloading] = useState(false);
  const [isloaderhome,setloaderhome]=useState(false);
  const [three,setthree]=useState([]);

  const gettopAnime = async () => {
    const data = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const res = await data.json();

    console.log(res.data);

    setanimedata(res.data);
    setloading(true);
    setloaderhome(true);
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
    // setloaderhome(true);
    setTimeout(()=>{
      setLoadingProgress(100);
    },500)
   
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
    getsearch('adventure');

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

export default adventure;




