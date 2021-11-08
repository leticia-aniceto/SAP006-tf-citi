import React from "react";
import Navbar from "../components/navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2>Página não encontrada</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
