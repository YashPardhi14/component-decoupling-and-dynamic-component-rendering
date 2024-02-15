
import React from 'react';
import { sortCards } from '../FilterCard/sortCard';
import Logout from '../Components/Logout';
import data from '../assests/public/data'
import DataCardList from '../CardLists/DataCardList';
import ImageCardList from '../CardLists/ImageCardList';
import TextCardList from '../CardLists/TextCardList';
export default function LoginSuccess(){

    const { dataCardList, imageCardList, textCardList }=sortCards(data);

    // const []=data;
  
    return(
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col ">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome!</h1>
     

      <div className="cards-container  flex-wrap justify-between grid grid-cols-3">

  <DataCardList data={dataCardList}/>

  <ImageCardList data={imageCardList}/>

<TextCardList data={textCardList}/>

      </div>
      <Logout />
    </div>
    );

    
}

 {/* <div className="cards-container  flex-wrap justify-between grid grid-cols-3">
      
        {dataCardList.length > 0 && (
          <div className="w-1/2 mr-4">
            <h2>Data Cards</h2>
            <h2>Number Of Cards:{dataCardList.length}</h2>
            {dataCardList.map((card) => (
              <DataCard key={card.name} data={card} />
            ))}
          </div>
        )}

        {imageCardList.length > 0 && (
          <div className="w-1/2 mx-4 ">
            <h2>Image Cards</h2>
            <h2>Number Of Cards:{imageCardList.length}</h2>
            {imageCardList.map((card) => (
              <ImageCard key={card.name} data={card} />
            ))}
          </div>
        )}

        {textCardList.length > 0 && (
          <div className="w-400 ml-4">
            <h2>Text Cards</h2>
            <h2>Number Of Cards:{textCardList.length}</h2>
            {textCardList.map((card) => (
             
              <TextCard key={card.name} data={card} />
            ))}
          </div>
        )}
      </div> */}