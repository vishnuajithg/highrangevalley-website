import React, { useEffect, useState } from "react";

const GradientText = ({ children }) => (
  <span
    className="font-bold italic text-base sm:text-lg md:text-xl leading-[1.35] text-center inline-block"
    style={{
      background: "linear-gradient(92.56deg, #343434 13.28%, #9A9A9A 78.27%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",
      letterSpacing: "0.01em",
      fontFamily: "Satoshi, sans-serif",
    }}
  >
    {children}
  </span>
);

export default function HeroPageRight() {
  // Mount animation state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const anim = setTimeout(() => setMounted(true), 60); // Small delay for natural effect
    return () => clearTimeout(anim);
  }, []);

  return (
    <div
      className={`
        
        relative w-full max-w-[675px] h-auto aspect-[675/620]
        
        transition-opacity duration-700 ease-out
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-[32px] z-0
        
        overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #A1E67A 0%, #15692A 100%)",
          opacity: 0.09,
          filter: "blur(30px)",
          borderRadius: "32px",
        }}
      />

      {/* Leaf background shape */}
     <img
  src="/136 2.svg"
  alt="Leaf background"
  className={`
    absolute left-1/2 top-0 -translate-x-1/2 scale-x-[-1]
    lg:top-10 lg:-translate-x-1/3
    w-[80vw] max-w-[675px] max-h-[535px] object-contain
    pointer-events-none z-0 rounded-[148px]
    transition-transform duration-700 ease-out
    
    ${mounted ? "scale-100" : "scale-95"}
  `}
  draggable={false}
  loading="lazy"
/>
{/* 
<img
        src="/136 2.svg"
        alt="Leaf background"
        className={`
          absoluteleft-1/2 top-10 -translate-x-1/3 scale-x-[-1]
          w-[80vw] max-w-[675px] max-h-[535px] object-contain
          pointer-events-none z-0 rounded-[148px]
         
          lg:mx-[200px]
           lg:left-1/2 lg:top-1 lg:-translate--1/2 lg:scale-x-[-1]
          transition-transform duration-700 ease-out
          ${mounted ? "scale-100" : "scale-95"}
        `}
        draggable={false}
        loading="lazy"
      /> */}

      {/* Main center pack - with fade up and slight bounce on mount, hover bloom */}
      <img
        src="/Artboard 1.svg"
        alt="Packshot artboard"
        className={`
          absolute left-[31.5%] top-[8%]
          w-[50vw] max-w-[344px] h-auto z-10
          pointer-events-none select-none
          transition-all duration-700 ease-out
          
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          hover:scale-105 hover:shadow-2xl
        `}
        draggable={false}
        loading="lazy"
        style={{ transitionProperty: "transform, opacity, box-shadow" }}
      />

      {/* Left pack - stagger in, hover lift */}
      <img
        src="/3.svg"
        alt="Product 3"
        className={`
          absolute left-[13.5%] top-[45%]
          lg:left-[30%] lg:top-[7%]
          w-[40vw] max-w-[269px] h-auto z-20
          pointer-events-none select-none
          lg:pt-[250px] lg:ml-[-100px]
          transition-all duration-700 ease-out delay-150
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
          hover:-translate-y-2 hover:scale-105
        `}
        draggable={false}
        loading="lazy"
        style={{ transitionProperty: "transform, opacity" }}
      />

      {/* Right pack - stagger in, hover lift */}
      <img
        src="/Brown_Zipper_Pouch_Mockup.svg"
        alt="Brown pouch"
        className={`
          absolute left-[60.5%] top-[66%]
          lg:left-[30%] lg:top-[7%]
          w-[25vw] max-w-[184px] h-auto z-20
          lg:pt-[380px] lg:ml-[220px]

          pointer-events-none select-none
          transition-all duration-700 ease-out delay-200
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
          hover:-translate-y-2 hover:scale-105
        `}
        draggable={false}
        loading="lazy"
        style={{ transitionProperty: "transform, opacity" }}
      />

      {/* India's No.1 Badge - fade/scale in, glass effect + light hover highlight */}
      <div
        className={`
          absolute left-[9.7%] top-[30%]
          lg:left-[9.7%] top-[30%]
          flex items-center justify-center
          rounded-[19px]
          shadow-lg backdrop-blur-md border
          z-30 border-[#ededed]
          px-4 py-3
          mt-[-40px] 
          sm:mt-[0px] sm:ml-[30px]
          
          max-w-[221px] w-[32vw] min-w-[160px]
          bg-white bg-opacity-[0.15]
          cursor-default select-none
          transition-all duration-700 ease-out delay-300
          ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          hover:shadow-xl hover:backdrop-brightness-110
        `}
        style={{
          background:
            "linear-gradient(103.07deg,rgba(255,255,255,0.16) 4.91%,rgba(255,255,255,0.36) 98.89%)",
          boxShadow: "16px 24px 40px rgba(0,0,0,0.08)",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        <div className="text-center mx-auto w-[86%]">
          <GradientText>India’s</GradientText>
          <span
            className="font-bold italic text-base sm:text-lg md:text-xl"
            style={{
              color: "#B4862A",
              fontFamily: "Satoshi, sans-serif",
              marginLeft: 5,
              display: "inline",
            }}
          >
            {" "}No.1
          </span>
          <br />
          <span
            className="font-bold not-italic text-sm sm:text-base text-[#57842b] block mt-1 leading-5"
            style={{ fontFamily: "Satoshi, sans-serif", letterSpacing: "0.07em" }}
          >
            Wholesale &amp; Retail
          </span>
          <GradientText>Spices Seller</GradientText>
        </div>
      </div>
    </div>
  );
}
