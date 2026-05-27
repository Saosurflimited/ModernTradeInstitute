import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Enroll from "./pages/Enroll";
import StatusPage from "./pages/StatusPage";
import LearnMore from "./pages/LearnMore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="programs" element={<Programs />} />
          <Route path="about" element={<About />} />
          <Route path="enroll" element={<Enroll />} />
          <Route path="learn-more" element={<LearnMore />} />
          <Route path="status-page" element={<StatusPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
