import React, { useState, useEffect } from "react";

export default function WhySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`
        relative py-2 md:py-2 flex flex-col items-center w-full bg-transparent
        transition-opacity duration-700 ease-out
        pt-2 md:pt-2 lg:pt-2
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Heading */}
      <h2
        className={`
          font-satoshi font-medium
          text-3xl sm:text-4xl md:text-5xl
          leading-tight md:leading-[64px]
          text-[#141414] text-center capitalize mb-6 sm:mb-8
          max-w-3xl w-full
          transition-transform duration-700 ease-out
          sm:mt-8 md:mt-10 mt-10
          ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
        `}
      >
        <strong>Why Highrange Valley?</strong>
      </h2>

      {/* Description */}
      <p
        className={`
          font-satoshi text-base sm:text-lg md:text-xl
          leading-relaxed md:leading-[30px]
          text-[#282928] font-normal
          text-center mx-auto mb-12 md:mb-14
          max-w-2xl w-full px-4 sm:px-0 text-[17px]
          transition-opacity duration-700 ease-out delay-150
          ${mounted ? "opacity-100" : "opacity-0"}
          tracking-wider
        `}
        style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
      >
        We are one of the <strong>largest dealers of premium cardamom in Kerala</strong>,
        handpicked from the valleys of highrange, with unspoiled essence.
      </p>

      {/* Service Cards Container */}
      <div
        className={`
          flex flex-col md:flex-row justify-center items-stretch
          gap-10 md:gap-8 w-full max-w-6xl
          px-4 sm:px-8 md:px-10 lg:px-16 lg:max-w-[1800px]
          md:max-w-[800px]
          transition-opacity duration-700 ease-out delay-300
          md:flex-wrap lg:flex-nowrap xl:flex-nowrap
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {[
          {
            key: "premium-quality",
            iconSrc: "/Essential.svg",
            iconBg: "bg-[#F5F7F6]",
            title: "Premium quality",
            desc: "Our premium spices sourced from trusted farmers, rigorously tested for maximum flavour, aroma, and quality.",
            iconSize: "w-7 h-7",
            titleMaxW: "max-w-[189px]",
            descMaxW: "max-w-[352px]",
          },
          {
            key: "global-shipping",
            iconSrc: "/Delivery.svg",
            iconBg: "bg-[#F2F7F4]",
            title: "Global shipping",
            desc: "Fast, secure, and reliable global shipping with flexible options and competitive rates. We make it easy to get the spices you need.",
            iconSize: "w-7 h-7",
            titleMaxW: "max-w-[185px]",
            descMaxW: "max-w-[352px]",
          },
          {
            key: "personalised-service",
            iconSrc: "/Frame 1618872583.svg",
            iconBg: "bg-[#F5F7F6]",
            title: "Personalised service",
            desc: "From custom blending to flexible packaging, we’re committed to helping you achieve your culinary goals.",
            iconSize: "w-12 h-12",
            titleMaxW: "max-w-[270px]",
            descMaxW: "max-w-[352px]",
          },
        ].map(({ key, iconSrc, iconBg, title, desc, iconSize, titleMaxW, descMaxW }, idx) => (
          <div
            key={key}
            className={`
              flex-1 min-w-[220px] items-center max-w-full md:max-w-[420px]
              px-6 md:px-8 py-7
              rounded-2xl
              bg-white/50 backdrop-blur-md shadow-lg border border-white/30
              flex flex-col items-start
              transition-transform duration-700 ease-out delay-${400 + idx * 100}
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              hover:scale-[1.03] hover:shadow-xl
            `}
          >
            {/* Icon + Title Row */}
            <div className="flex items-center mb-0 w-full">
              <div className={`flex items-center justify-center text-center w-18 h-18 rounded-full ${iconBg}`}>
                <img src={iconSrc} alt={title} className={iconSize} />
              </div>
              <span
                className={`ml-4 font-satoshi text-[24px] font-semibold text-lg md:text-2xl leading-tight md:leading-[34px] text-[#232423] truncate ${titleMaxW}`}
                style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
              >
                {title}
              </span>
            </div>
            {/* Description */}
            <p
              className={`font-satoshi text-justify mx-auto text-[19px] sm:text-[20px] font-thin tracking-normal pb-2 text-base md:text-lg leading-relaxed text-[#282928] font-normal mt-4 md:mt-6 mb-[-10px] ${descMaxW}`}
              style={{ fontFeatureSettings: "'pnum' on, 'lnum' on" }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
