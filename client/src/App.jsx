import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./Pages/CreateBlog";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="create" element={<CreateBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
