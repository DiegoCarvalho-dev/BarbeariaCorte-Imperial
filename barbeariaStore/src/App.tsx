import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CosaNostra from "./components/CosaNostra";
import FindUnit from "./components/FindUnit";
import BarberSchool from "./components/BarberSchool";
import Blog from "./components/Blog";
import FranchiseForm from "./components/FranchiseForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-mafia-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <CosaNostra />
        <FindUnit />
        <BarberSchool />
        <Blog />
        <FranchiseForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
