"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import HireMeModal from './HireMeModal';
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleRemount = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="hero-section lg:py-16" key={animationKey}>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:text-left text-center max-w-screen-lg mx-auto"
        >
          <h1 className="text-[#ece4b4] mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Christopher',
                1000,
                'a CS Student',
                1000,
                'a Kaldagerist',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="type-animation"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-lg mb-6 lg:text-xl">
            I am a passionate and creative individual with a love for technology and innovation.
            Constantly seeking new challenges and opportunities to grow in the world of web development.
          </p>
          <div>
            <button onClick={handleOpenModal} className="relative px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-800 via-secondary-500 to-cyan-400 text-white overflow-hidden hover:opacity-75 transition-opacity">
              Hire me
            </button>
            <button className="relative px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-800 via-teal-500 to-secondary-400 hover:opacity-75 transition-opacity text-white border border-white mt-3">
              <span className="block bg-[#121212] rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/Hero-Image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
          </motion.div>
      </div>
      {isModalOpen && <HireMeModal onClose={handleCloseModal} />}
      <button onClick={handleRemount} style={{ display: 'none' }}></button>
    </section>
  );
}

export default HeroSection;