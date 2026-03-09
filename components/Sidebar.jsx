"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsScrolling(true);
    setActiveSection(id);
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;

          const progress =
            (scrollTop / (documentHeight - windowHeight)) * 100;
          setScrollProgress(Math.min(progress, 100));

          if (!isScrolling) {
            const sections = ["home", "about", "projects", "contact"];
            let newActive = activeSection;

            for (const id of sections) {
              const el = document.getElementById(id);
              if (!el) continue;

              const rect = el.getBoundingClientRect();
              if (
                rect.top <= windowHeight / 3 &&
                rect.bottom >= windowHeight / 3
              ) {
                newActive = id;
                break;
              }
            }

            if (newActive !== activeSection) setActiveSection(newActive);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isScrolling]);

  return (
    <div className="fixed left-0 top-0 w-[350px] h-screen border-r-2 border-gray-300 flex flex-col items-start pt-20 pl-[57px] bg-white/70 z-[100] max-md:w-full max-md:h-auto max-md:relative max-md:p-5 max-md:border-r-0 max-md:border-b max-md:border-black">
      {/* Progress Bar */}
      <div
        className="absolute right-[-2px] top-0 w-0.5 bg-gradient-to-b from-black to-gray-300 transition-all duration-100 ease-out z-[101] max-md:hidden"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      {/* Profile */}
      <div className="relative w-[252px] h-[252px] mb-[50px] max-md:ml-0">
        <div className="w-[252px] h-[252px] rounded-full overflow-hidden relative">
          <Image
            src="/assets/images/my-photo.JPG"
            alt="Profile"
            width={252}
            height={252}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <Image
          src="/assets/images/berkeley-img.png"
          alt="Berkeley"
          width={73}
          height={73}
          className="absolute top-[-2px] right-[-2px] w-[73px] h-[73px] rounded-full object-contain bg-white shadow-md z-[2]"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2.5 mb-10 max-md:flex-row max-md:gap-5">
        {["home", "about", "projects", "contact"].map((id) => (
          <div
            key={id}
            className={`text-[22px] text-black cursor-pointer transition-all ${
              activeSection === id ? "font-bold" : "font-normal hover:font-bold"
            }`}
            onClick={() => scrollToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </div>
        ))}
      </nav>

      {/* Contact */}
      <div className="flex flex-col gap-2.5 mb-10">
        <div className="flex items-center gap-3">
          <Mail className="w-[25px] h-[25px] text-black" />
          <p className="text-[16px] text-black">02clara.kim@berkeley.edu</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-[25px] h-[25px] text-black" />
          <p className="text-[16px] text-black">(562) 360-0753</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-2">
        <a
          href="https://github.com/02clarakim"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/assets/icons/github-logo.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/chaeeun-clara-kim-3249b7200/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/assets/icons/linkedin-logo.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;