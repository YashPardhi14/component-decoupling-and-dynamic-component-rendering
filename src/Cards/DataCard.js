import React from "react";

export default function DataCard({data}){
    const {name,type,targetURL,targetText}=data;
    return (
        <div className="border rounded-lg p-4 bg-white m-5  hover:shadow-xl hover:scale-103  bg-slate-50">
        <h3 className="text-lg align-top">{name}</h3>
        <h3 className="text-lg mr-10 text-blue-800 font-bold">{type}</h3>
        <img src={targetURL} alt="DataImage"/>
       
      </div>
    );
}