import React from "react";
import ImageCard from "../Cards/ImageCard";

export default function ImageCardList({ data }) {
  return (
    <div className="w-1/2 mx-4 ">
      <h2>Image Cards</h2>
      <h2>Number Of Cards:{data.length}</h2>
      {data.map((card) => (
        <ImageCard key={card.name} data={card} />
      ))}
    </div>
  )
}