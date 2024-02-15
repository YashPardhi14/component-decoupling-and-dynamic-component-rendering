
import React from "react";
export default function TextCard({data}){
    const {name,type,targetURL,targetText}=data;
    return (
        <div className="border rounded-lg p-4 m-5 hover:shadow-xl hover:scale-103 bg-slate-50"
      
        
        >
        <h3 className="text-lg align-top">{name}</h3>
        <h3 className="text-lg text-blue-800 font-bold">{type}</h3>
      <p className="text-lg font-medium">{targetText}</p>
    </div>
    );
}