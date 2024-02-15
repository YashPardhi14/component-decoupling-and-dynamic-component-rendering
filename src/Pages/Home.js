import React from "react";

import data from '../assests/public/data.json'
import Logout from '../Components/Logout';
import DataCardList from '../CardLists/DataCardList';
import ImageCardList from '../CardLists/ImageCardList';
import TextCardList from '../CardLists/TextCardList';
import LoginFailed from '../LoginHandler/Failed'
import { sortCards } from "../FilterCard/sortCard";


function Home({ isLoggedIn }) {

  const { dataCardList, imageCardList, textCardList } = sortCards(data);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {isLoggedIn && (

        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col ">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome!</h1>


          <div className="cards-container  flex-wrap justify-between grid grid-cols-3">

            <DataCardList data={dataCardList} />

            <ImageCardList data={imageCardList} />

            <TextCardList data={textCardList} />

          </div>
          <Logout />
        </div>
      )}


      {!isLoggedIn && (
        <LoginFailed />
      )}



    </div>
  )
}
export default Home;



{/* {isLoggedIn ? (
          <LoginSuccess/>
        ) : (
          <LoginFailed/>
        )} */}