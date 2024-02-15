import React from "react";

export default function ImageCard({data}){
    const {name,type,targetURL,targetText}=data;
    return (
        <div className="relative overflow-hidden shadow-md rounded-lg m-5  hover:shadow-xl hover:scale-103  bg-slate-50">
        <h3 className="text-lg align-top">{name}</h3>
        <h3 className="text-lg text-blue-800 font-bold">{type}</h3>
      <img
        src={targetURL}
        alt="Cardimage"
        className="object-cover w-full h-400"
      />
<p className="text-lg font-medium">{targetText}</p>
      
     
    </div>
    );
}