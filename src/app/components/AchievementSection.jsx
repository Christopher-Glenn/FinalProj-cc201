"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchievementSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const achievementsList = [
    {
      metric: "Projects",
      value: "4",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Users",
      value: "100",
    },
    {
      metric: "Awards",
      value: "1",
    },
    {
      metric: "Years",
      value: "1",
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("achievementSection");

    if (section) {
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="achievementSection" className="py-8 x-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-cneter justify-between ">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {isVisible && (
                <>
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => ({
                      mass: 2,
                      friction: 100,
                      tension: 140 * (index + 1),
                    })}
                  />
                  {achievement.postfix}
                </>
              )}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
