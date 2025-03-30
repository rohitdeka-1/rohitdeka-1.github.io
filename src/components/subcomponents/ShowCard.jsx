import React from "react";

const ShowCard = (props) => {
  return (
    <div className=" inline-block text-xs px-2 mt-1 text-left bg-gray-800 rounded-2xl font-bold black text-gray-300">
      <p>{props.name}</p>
    </div>
  );
};

export default ShowCard;
