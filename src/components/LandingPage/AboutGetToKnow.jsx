import React, { useEffect, useState } from "react";

export default function AboutGetToKnow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(timer);
  }, []);

  return (
   <section
  className={`
    bg-no-repeat 
    bg-[length:1200px_1300px] h-[960px]   bg-[position:10%_10%] // 20% on X (left→right), 80% on Y (top→bottom)
    mt-10
    lg:mt-10
    md:mt-10
    sm:mt-10
    sm:bg-[length:1500px_auto] sm:bg-[position:25%_90%]
    md:bg-[length:1400px_auto] md:bg-[position:40%_100%]
    lg:bg-[length:2000px_1200px] lg:bg-[position:60%_60%]
    transition-opacity duration-700 ease-out
    ${mounted ? "opacity-100" : "opacity-0"}
  `}
  style={{
    backgroundImage:
      "linear-gradient(180deg, #FAFCFB -0.3%, rgba(250,252,251,0.1) 100%), url('/freepik_edit.svg')",
    backgroundBlendMode: "overlay",
  }}
>
      <div
        className={`
          w-full flex flex-col-reverse md:flex-row md:items-center justify-center
          gap-8 md:gap-12 lg:gap-64
          items-center
          lg:gap-24
          px-4 sm:px-8 lg:px-16
          min-h-[280px] sm:min-h-[360px] md:min-h-[500px] lg:min-h-[618px]
          overflow-hidden
        `}
      >
        {/* Product Image */}
        <div
          className={`
            relative flex-shrink-0  flex justify-center items-center
            w-[550px] h-[300px] mt-12
            sm:w-[170px] sm:h-[260px]
            md:w-[150px] md:h-[300px]
            lg:w-[210px] lg:h-[380px] lg:ml-[12%] lg:mt-64
            transition-transform duration-700 ease-out delay-100
            ${mounted ? "opacity-100" : "opacity-0 -translate-x-10"}
          `}
        >
          <img
            src="/Artboard 2.svg"
            alt="Highrange Product"
            className="w-full h-full object-contain"
            draggable={false}
            loading="lazy"
          />
        </div>

        {/* Text Box */}
        <div
          className={`
            bg-white bg-opacity-70 backdrop-blur-md rounded-2xl
            
            p-5 sm:p-6 md:p-8
            w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
            ring-1 ring-gray-200
            ml-0 sm:ml-6 lg:ml-28
            mr-0 sm:mr-2 lg:mr-8
            shadow-lg flex flex-col
            lg:mt-64
            text-center md:text-left
            transition-transform duration-700 ease-out delay-200
            ${mounted ? "opacity-100" : "opacity-0 translate-y-10"}
          `}
        >
          <h2
            className="text-[#232423] font-satoshi font-medium text-2xl sm:text-3xl md:text-[26px] leading-snug md:leading-[34px] mb-5"
            style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
          >
            Get to know us
          </h2>
          <p
            className="text-[#282928] text-justify font-satoshi text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[24px] font-normal mb-6"
            style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
          >
            At <strong>Highrange Valley</strong>, we bring the authentic taste
            of Kerala’s finest spices and natural products to the world.
            Nestled in the spice-rich region of Idukki, we have built a
            reputation for excellence in sourcing and supplying the{" "}
            <strong>
              highest quality cardamom, tea, coffee, honey, dry fruits, and
              other spices
            </strong>
            . Whether you're a <strong>wholesaler</strong> looking for bulk
            quantities or a retailer seeking premium goods,{" "}
            <strong>Highrange Valley</strong> is your...
          </p>
          <div className="flex items-center justify-center md:justify-start text-[#146B2D] text-base sm:text-lg font-medium leading-[24px] gap-1 cursor-pointer group transition-colors">
            Read more
            <svg
              className="ml-2 mt-px transition-transform duration-300 group-hover:translate-y-1"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#146B2D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
