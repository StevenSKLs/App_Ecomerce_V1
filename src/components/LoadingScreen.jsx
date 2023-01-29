import React from "react";
import "../styles/loading-screen.css";

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
};

//<span className="loader"></span></div>
export default LoadingScreen;
