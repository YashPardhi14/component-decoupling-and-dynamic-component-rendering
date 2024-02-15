import React from "react";
import DataCard from "../Cards/DataCard";

export default function DataCardList({ data }) {

  return (

    <div className="w-1/2 mr-4">
      <h2>Data Cards</h2>
      <h2>Number Of Cards:{data.length}</h2>
      {data.map((card) => (
        <DataCard key={card.name} data={card} />
      ))}
    </div>

  )


}