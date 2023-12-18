import React, { useState, useEffect } from 'react';
import { FaFacebook, FaRegEnvelope } from 'react-icons/fa';

const HireMeModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleExit = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); // Adjust the duration based on your transition duration
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleExit}></div>
      <div className="relative z-50 bg-gray-800 p-8 max-w-md rounded-md transform transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
        <div className="mb-4">
          <p className="text-lg mb-2 text-white">
            <FaRegEnvelope className="inline mr-2 text-blue-500" />
            Email: <a href="mailto:christopherglen.bedis@wvsu.edu.ph" className="text-blue-500">christopherglen.bedis@wvsu.edu.ph</a>
          </p>
          <p className="text-lg mb-2 text-white">
            <FaFacebook className="inline mr-2 text-blue-500" />
            Facebook: <a href="https://www.facebook.com/Noonelikesyou.btch" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://www.facebook.com/Noonelikesyou.btch</a>
          </p>
        </div>
        <div className="border-t-2 border-white my-4"></div>
        <div className="border-t-2 border-white my-4"></div>
        <button className="absolute top-4 right-4 text-white" onClick={handleExit}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HireMeModal;
