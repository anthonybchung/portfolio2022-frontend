import "./App.css";

import { Routes, Route } from "react-router-dom";

import LayOut from "./pages/layout.component";
import Home from "./pages/home/Home.page";
import SideProject from "./pages/sideproject/SideProject.page";
import Blog from "./pages/blog/Blog.page";
import AboutMe from "./pages/aboutme/AboutMe.page";
import Login from "./pages/login/Login.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/side-projects" element={<SideProject />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
