import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ components, setComponents }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "component",
    drop: (item) => {
      setComponents((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleRemove = (index) => {
    setComponents(components.filter((_, i) => i !== index));
  };

  const calculateResult = () => {
    try {
      const expression = components.map((c) => c.label).join("");
      return eval(expression); // ⚠️ Use with caution, better alternatives exist
    } catch {
      return "Error";
    }
  };

  return (
    <div
      ref={drop}
      className={`w-full min-h-[100px] p-4 border-2 bg-white  ${
        isOver ? "border-green-500" : "border-gray-300"
      } rounded-lg`}
    >
      <div className="flex flex-wrap gap-2 shadow-lg">
        {components.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-black  text-pink-400 font-bold rounded-md flex items-center"
          >
            {item.label}
            <button
              onClick={() => handleRemove(index)}
              className="ml-2 px-2 rounded"
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      {/* Display Result */}
      <div className="mt-4 text-xl bg-green-400 p-1 font-bold font-serif">
        Result: {components.length ? calculateResult() : ""}
      </div>
    </div>
  );
};

export default DropZone;
