import React from "react";
import CalculatorBuilder from "./Components/CalculatorBuilder";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";

function App() {
  
  return (
    <>
      <MyNavbar/>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <CalculatorBuilder />
        </div>
      </div>

      <Footer/>
    </>
    
  );
}

export default App;
