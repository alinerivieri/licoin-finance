import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Wallet from "../components/Wallet/Wallet";

const WalletPage = () => {
  return (
    <div>
      <>
        <Navbar />
        <Wallet />
        <Footer />
      </>
    </div>
  );
};

export default WalletPage;
