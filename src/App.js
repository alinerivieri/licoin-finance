import React from "react";
import HomePage from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Featured from "./pages/FeaturedPage";
import Signup from "./pages/SignupPage";
import Coins from "./pages/CoinsPage";
import Wallet from "./pages/WalletPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/earn" element={<Signup />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/wallet" element={<Wallet />} /> 
        </Routes>
      </>
    </div>
  );
};

export default App;
