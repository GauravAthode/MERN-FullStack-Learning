import React from "react";
import photo from "../assets/photo.png";
import photo1 from "../assets/homeImages/photo1.png";
import photo2 from "../assets/homeImages/photo2.png";
import photo3 from "../assets/homeImages/photo3.png";
import photo4 from "../assets/homeImages/photo4.png";
const Home = () => {
  return (
    <>
      <div className="justify-items-center mt-10">
        <h1 className="text-5xl font-bold text-pink-500">
          Welcome to Beauty Makeup
        </h1>
        <p className="text-xl text-gray-600 mt-3">
          ✨Discover premium beauty products designed to enhance your natural
          glow✨
        </p>
      </div>
      <div className="flex gap-3 m-20 p-3 border-10 shadow-2xl border-pink-100 mt-10">
        <div>
          <img src={photo1} alt="photo1" />
          <img src={photo2} alt="photo2" className="mt-3" />
        </div>
        <div>
          <img src={photo} alt="photo" />
        </div>
        <div>
          <img src={photo3} alt="photo3" />
          <img src={photo4} alt="photo4" className="mt-3" />
        </div>
      </div>
    </>
  );
};

export default Home;
