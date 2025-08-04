import React, { useEffect, useState } from "react";

export default function HeroPageLeft() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
   
    
    <div
      className={`
        flex flex-col  justify items-center w-full mt-0 
        max-w-[554px] min-h-[400px] md:min-h-[507px] pt-5 md:pt-[40px] mb-10 
        ml-[2%]  
        sm:ml-[15%]
        md:ml-[20%] lg:ml-[5%]
        transition-opacity duration-700 ease-out 
        
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >
       {/* Decorative Leaf */}
      <img
        src="/136 3.svg"
        alt="Decorative leaf"
        className={`
          absolute pointer-events-none select-none 
          -left-[-40px] -top-28 w-48 h-32
          md:-left-[300px] md:-top-[120px] md:w-[297px] md:h-[199px]
          transition-transform duration-700 ease-out
          ${mounted ? "scale-100" : "scale-95"}
        `}
        // style={{ transform: "rotate(-180deg) scaleX(-1)" }}
      />

      {/* Main Heading */}
      <h1
        className={`
          font-sans font-medium capitalize
        text-4xl sm:text-4xl md:text-[56px]
         leading-snug md:leading-[64px] text-[#141414] mb-6 w-full
         sm:text-[50px] sm:text-left sm:ml-[-120px] 
          transition-transform duration-700 ease-out
          lg:text-[64px] lg:leading-[72px] lg:ml-[120px] lg:w-[800px]
          ${mounted ? "translate-y-0" : "translate-y-6 opacity-0"}
          ${mounted ? "opacity-100" : ""}
        `}
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      ><strong>Awaken Your Senses<br />
        With Every Sip And<br />
        Sprinkle</strong>
        
      </h1>

      {/* Main Description */}
      <p
        className={`
          text-lg  sm:text-lg md:text-[20px] leading-relaxed sm:leading-8 md:leading-[30px] text-[#282928] font-normal mb-8 w-full max-w-xl
          transition-opacity duration-700 ease-out delay-100 
          sm:text-[25px] sm:text-justify  sm:ml-[-120px] 
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontFeatureSettings: "'pnum' on, 'lnum' on",
        }}
      >
        Handpicked from the valleys of highrange, our teas and spices bring you the rich, unspoiled essence of the highlands.
      </p>

      {/* Buttons */}
      <div
        className={`
          flex flex-row gap-4 mb-7 w-full max-w-md  
          lg:ml-[-300px] 
          md:ml-[-300px]
          transition-opacity duration-700 ease-out delay-200
        
          sm:text-[20px] sm:justify-center sm:items-center sm:ml-[-300px]
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        <a
          href="#contact"
          className="
            flex justify-center items-center font-sans font-normal text-lg px-3
            min-w-[140px] sm:min-w-[180px] sm:h-[64px] sm:text-xl
            rounded-full
            bg-gradient-to-r from-[#88B158] to-[#146B2D]
            text-white shadow
            gap-2
            transition
            hover:brightness-110
            whitespace-nowrap
            
            
          "
        >
          <img src="/Crypto.svg" alt="WhatsApp Icon" className="w-5 h-5" />
          Connect now
        </a>
        <a
          href="tel:+91-9876543210"
          className="
            flex justify-center items-center font-sans font-medium text-lg px-3
            min-w-[120px] sm:min-w-[180px] h-[64px]
            rounded-full
            border-2 border-[#146B2D]
            text-[#146B2D]
            gap-2
            transition
            hover:bg-[#ECF5E8]
            whitespace-nowrap
          "
        >
          <img src="/Iconly.svg" alt="Call Icon" className="w-5 h-5" />
          Call now
        </a>
      </div>

      {/* Avatars + "1000+ happy customers across the globe" */}
      <div
        className={`
          relative flex flex-row mx-auto items-center gap-5 mt-2 
          ml-[00px] 
          sm:ml-[-230px]
       
          
             sm:px-16  sm:mx-16 sm:mb-12 
          transition-opacity duration-700 ease-out delay-300
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Avatars */}
        <div className="flex justify-start items-center -space-x-5 z-10 gap-3 ">
          {["/Ellipse 4942.svg", "/Ellipse 4942.svg", "/Ellipse 4942.svg", "/Ellipse 4942.svg"].map(
            (img, idx) => (
              <div
                key={idx}
                className={`
                  w-16 h-16 rounded-full border-4 border-white
                  overflow-hidden bg-white
                  z-[${10 - idx}]
                  ${idx !== 0 ? "-ml-5" : ""}
                  transition-transform duration-500 ease-out
                  hover:scale-110
                `}
              >
                <img
                  src={img}
                  alt={`avatar-${idx}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )
          )}
        </div>

        {/* Vertical Separator */}
        <div className="h-10 w-px bg-gray-400 shrink-0"></div>

        {/* Testimonial text */}
        <div className="min-w-[180px] text-left">
          <span
            className="text-[#146B2D] font-bold text-sm md:text-base leading-[22px]"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              letterSpacing: "0.01em",
              fontFeatureSettings: "'pnum' on, 'lnum' on",
            }}
          >
            1000+ <span className="font-normal text-[#282928]">happy customers</span>
            <br />
            <span className="font-normal text-[#282928]">across the globe</span>
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
