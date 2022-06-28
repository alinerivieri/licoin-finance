import React from "react";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const FeaturedPage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Featured />
        <Footer />
      </>
    </div>
  );
};

export default FeaturedPage;
