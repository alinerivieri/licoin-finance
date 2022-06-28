import Coins from "../components/Coins/Coins";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CoinsPage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Coins />
        <Footer />
      </>
    </div>
  );
};

export default CoinsPage;
