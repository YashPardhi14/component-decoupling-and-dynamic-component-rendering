
import React from "react";
import TextCard from "../Cards/TextCard";

export default function TextCardList({ data }) {

  return (
    <div className="w-400 ml-4">
      <h2>Text Cards</h2>
      <h2>Number Of Cards:{data.length}</h2>
      {data.map((card) => (

        <TextCard key={card.name} data={card} />
      ))}
    </div>
  )


}