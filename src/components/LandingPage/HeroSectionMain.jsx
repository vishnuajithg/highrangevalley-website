import React from "react";
import ProductCluster from "./HeroPageRight";
import TestCluster from "./HeroPageLeft";

export default function HeroSectionMain() {
  return (
    <section
      className="
        relative w-full min-h-[560px] md:min-h-[700px] lg:h-[850px] 
        overflow-hidden flex flex-col lg:w-full 
        pb-0 mb-0
        bg-gradient-to-b from-[rgba(23, 211, 117, 0)] to-[#F9FBFA]
      "
      style={{
        background:
          "linear-gradient(180deg, rgba(249,251,250,0) 0%), linear-gradient(0deg, rgba(252,255,245,0.6), rgba(252,255,245,0.6))",
        paddingLeft: "max(env(safe-area-inset-left), 1rem)",
        paddingRight: "max(env(safe-area-inset-right), 1rem)",
      }}
    >
      <div
        className="
         flex flex-col-reverse gap-10 mt-20
         lg:flex lg:flex-row lg:gap-[450px] lg:px-[12%] lg:py-[4%] lg:gap-0
        "
      >
        
        {/* LEFT: Text content */}
        <div className="lg:ml-[00px]">
          <TestCluster />
          
        </div>

        {/* RIGHT: Product Cluster */}
        <div className="">
          <ProductCluster />
        </div>
      </div>
    </section>
  );
}
