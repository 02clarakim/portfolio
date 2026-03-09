"use client";

import React, { useEffect, useState } from "react";

function Hero() {
  const lines = ["Hello,", "I'm Clara Kim!"];
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.2;
      setShowArrow(window.scrollY < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(8px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }

        .hero-letter {
          opacity: 0;
          display: inline-block;
          transform: translateY(20px);
          margin-right: 2px;
          animation: fadeUp 0.6s forwards ease-out;
        }

        .scroll-arrow {
          animation: bounce 1.6s infinite ease-in-out;
        }
      `}</style>

      <section
        id="home"
        className="ml-[150px] min-h-screen flex items-center box-border max-lg:ml-0 max-lg:px-6 max-md:py-[50px] max-md:px-5 max-md:text-center"
      >
        <div className="max-w-[855px]">
          <h1 className="text-[85px] font-semibold leading-[1.1] text-black m-0 mb-5 text-left inline-block max-lg:text-[80px] max-md:text-[48px] max-md:text-center">
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="block whitespace-pre">
                {line.split("").map((char, i) => (
                  <span
                    key={i}
                    className="hero-letter"
                    style={{
                      animationDelay: `${(lineIndex * line.length + i) * 0.05}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </h1>

          <p className="text-[40px] font-normal text-[#858585] pt-5 m-0 text-left max-lg:text-[32px] max-md:text-2xl max-md:text-center">
            I like to create thoughtful interfaces that feel as good as they look.
          </p>

          {showArrow && (
            <div
              className="scroll-arrow fixed bottom-[100px] left-1/2 -translate-x-1/2 cursor-pointer flex justify-center text-gray-400 opacity-80 hover:opacity-100 transition-opacity"
              onClick={scrollToAbout}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Hero;