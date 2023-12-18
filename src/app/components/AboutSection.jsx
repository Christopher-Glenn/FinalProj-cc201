  "use client";
  import React, {useTransition, useState } from 'react';
  import Image from 'next/image';
  import TabButton from './TabButton';

  const TAB_DATA = [
      {
          title: "Skills",
          id:"skills",
          content: (
              <ul>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>NextJS</li>
                  <li>Tailwind</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
              </ul>
          )
        },
      {
          title: "Education",
          id: "education",
          content: (
              <ul>
                  <li>West Visayas State University</li>
                  <li>Bachelor of Science in Computer Science</li>
                  <li></li>
              </ul>
          )
      },
      {title: "Experience",
          id: "experience",
          content: (
              <ul>
                  <li>goIT Digital Innovation Fair 2022 Finalist</li>
                  <li>Frontend Developer of Binhi website</li>
                  <li>Frontend Developer of WVSU USC Infosite</li>
              </ul>

          )
      }
  ]

  const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] =useTransition();

    const handleTabChange = (id) => {
      startTransition(() => {
          setTab(id);
      });
    }
      return (
    <section className="text-white">
          <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
              <Image 
                  src="/images/about-image.jpg"
                  alt="about image" 
                  width={500} 
                  height={500}    
              />
              <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">I am a passionate and detail-oriented Computer Science student at West Visayas State 
                University. At 19 years old, with a passion for creating interactive and responsive websites.
                I have experience working with HTML, CSS, JavaScript, React, NextJS, Tailwind, Node.js, and Git.
                </p>
                <div className="flex flex-row justify-start mt-8">
                  <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab =="skills"}
                  > 
                    {" "}
                  Skills{" "}
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab =="education"}
                  > 
                    {" "}
                  Education{" "}
                  </TabButton>
                  <TabButton 
                    selectTab={() => handleTabChange("experience")} 
                    active={tab =="experience"}
                  > 
                    {" "}
                  Experience{" "}
                  </TabButton>
                  </div>
                  <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
              </div>
          </div>
    </section>
    );
  };

  export default AboutSection;