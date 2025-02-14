import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "./DraggableItem ";
import DropZone from "./DropZone";

const CalculatorBuilder = () => {
  // Load components from localStorage or default to an empty array
  const [components, setComponents] = useState(
    JSON.parse(localStorage.getItem("calculatorComponents")) || []
  );

  // Save components to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("calculatorComponents", JSON.stringify(components));
  }, [components]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 sm:p-6 md:p-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-white">
            CalcFlow<span className="block sm:inline"> Calculator</span>
          </h2>
          <img
            className="w-16 sm:w-20 mb-4 sm:mb-0"
            src="https://i.pinimg.com/736x/4f/e1/d0/4fe1d0c4ee72ad6152789d6e2c84e4fc.jpg"
            alt="Calculator Logo"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-5 items-center">
          {/* Toolbox */}
          <div className="p-4 border-2 rounded-lg bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h3 className="font-bold text-black mb-2">Toolbox</h3>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(10).keys()].map((num) => (
                <DraggableItem key={num} type="number" label={num.toString()} />
              ))}
              {["+", "-", "*", "/", "="].map((op) => (
                <DraggableItem key={op} type="operator" label={op} />
              ))}
            </div>
          </div>

          {/* Drop Zone */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <DropZone components={components} setComponents={setComponents} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default CalculatorBuilder;
