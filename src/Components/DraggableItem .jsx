import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "component",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`w-20 m-1 bg-black text-pink-400 font-bold rounded-full items-center p-2 cursor-pointer ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      {label}
    </div>
  );
};

export default DraggableItem;
