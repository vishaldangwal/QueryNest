import React from "react";
import Navbar from "../components/Navbar"; // Correct path
import Hero from "../components/Hero"; // Correct path
import FeaturedBlogs from "../components/FeaturedBlogs"; // Correct path
import Categories from "../components/Categories"; // Correct path
import Newsletter from "../components/Newsletter"; // Correct path

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
    </div>
  );
};

export default HomePage;