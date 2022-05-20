import React from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import BlogPage from "./pages/BlogPage";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<SinglePost />} />
      </Routes>
    </div>
  );
};

export default App;
