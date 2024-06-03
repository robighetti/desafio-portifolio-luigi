import React from "react";
import img from "../assets/img/eu.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Luigi Meneghini
          <span className=" text-brightColor"> FullStack </span>
          Developer
        </h1>
        <p>
          A 15-year-old youth, not very experienced but very fearless, resilient, and eager to learn. Never giving up is a characteristic, always pushing through to the end regardless of the situation. I do everything for friends and family, you won't regret hiring me. Rodrigo and Freddy.
        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20">
        <img width={570} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
