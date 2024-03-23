import React from "react";
import Navbar from "./components/navbar";
import Imageslider from "./components/Imageslider";
import url1 from "../public/img1.jpg";
import url2 from "../public/img2.jpg";
import url3 from "../public/img3.jpg";
import url4 from "../public/img4.jpg";
import url5 from "../public/img5.jpg";

function App() {
  const IMAGES = [url1, url2, url3, url4, url5];
  return (
    <>
      <Navbar />
      <div className="h-[49.4rem] w-[100%] my-0 mx-auto">
        <Imageslider imageUrls={IMAGES} />
      </div>
    </>
  );
}

export default App;
