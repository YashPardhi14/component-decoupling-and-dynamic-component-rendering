import React from "react";

function DynamicCard({key,data}){
const {name,type,targetURL,targetText}=data;

const renderContent=()=>{

switch(type){
    case 'DATA-CARD':
        return (
          <div className="border rounded-lg p-4 bg-white w-400 h-400">
            <h3 className="text-lg align-top">{name}</h3>
            <img src={targetURL} alt="DataImage"/>
           
          </div>
        );
      case 'IMAGE-CARD':
        return (
          <div className="relative overflow-hidden shadow-md rounded-lg w-400 h-700">
              <h3 className="text-lg align-top">{name}</h3>
            <img
              src={targetURL}
              alt="Cardimage"
              className="object-cover w-full h-400"
            />
 <p className="text-lg font-medium">{targetText}</p>
            
           
          </div>
        );
      case 'TEXT-CARD':
        return (
          <div className="border rounded-lg p-4 bg-white w-400 h-400">
              <h3 className="text-lg align-top">{name}</h3>
            <p className="text-lg font-medium">{targetText}</p>
          </div>
        );
      default:
        return <p>Invalid card type</p>;
}

}


return(
    <div key={key} className="mb-4">
    {renderContent()}
  </div>
);




}


export default DynamicCard;