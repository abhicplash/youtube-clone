import React from "react";

const Button = () => {
  const arr = [
    "All",
    "Music",
    "Cricket",
    "Movies",
    "Live",
    "Football",
    "Sleep",
    "Coding",
    "Malayalam",
    "Computer Programming",
    "News"
  ];
  return (
    <div className="flex gap-3">
      {arr.map((ar, index) => (
        <button
          key={index}
          className="px-3 py-[6px] rounded-lg text-xs font-semibold bg-gray-200 text-gray-700"
        >
          {ar}
        </button>
      ))}
    </div>
  );
};

export default Button;
