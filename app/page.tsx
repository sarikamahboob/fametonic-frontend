"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      {/* Top Banner */}
      <div className="bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] py-[20px] lg:py-[12px] flex items-center justify-center text-white px-3 text-center">
        <span
          className="font-extrabold text-[16px] sm:text-[20px] md:text-[22px] leading-none align-middle"
          style={{ fontFamily: "var(--font-figtree)" }}
        >
          🚀 <span className="text-[#00e7f9]">FRESH BEGINNINGS SALE: </span>
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>

      {/* Header */}
      <header className="flex items-center lg:items-start  justify-between mt-6 mb-10 max-w-[1124px] mx-auto px-4 mt-[35px]">
        {/* Logo */}
        <div className="flex justify-center md:justify-start z-4">
          <Image
            src="/images/logo.png"
            alt="Fametonic Logo"
            width={150}
            height={60}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[40px] lg:mr-[120px]">
          <Link
            href="#"
            className="text-[#A9A9A9] font-semibold text-[18px]"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-[#A9A9A9] font-semibold text-[18px]"
            style={{ fontFamily: "var(--font-figtree)" }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden absolute right-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mb-6">
          <Link href="#" className="text-[#A9A9A9] font-semibold text-lg">
            About us
          </Link>
          <Link href="#" className="text-[#A9A9A9] font-semibold text-lg">
            Contact
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="px-6 lg:px-12">
        <div className="max-w-[1124px] mx-auto flex flex-col-reverse md:flex-row items-center relative mt-[57px]">
          {/* Left Content */}
          <div className="w-full md:w-[516px] relative z-10 mt-[242px] sm:mt-[400px] md:mt-0">
              <h1
                className="text-[25px] sm:text-[30px] md:text-[35px] font-extrabold leading-[1.1] lg:leading-[1.3] text-center md:text-left align-middle"
                style={{ fontFamily: "var(--font-urbanist)", letterSpacing: '0%' }}
              >
                Want to Turn Social Media Into a{" "}
                <span className="text-white">Profitable Career?</span>
              </h1>

            <h2
              className="text-[25px] sm:text-[28px] md:text-[35px] font-extrabold text-center md:text-left align-middle leading-[1.2] lg:leading-[1.3]"
              style={{
                fontFamily: "var(--font-urbanist)",
                color: "#00E7F9",
                textShadow: "0px 4px 4px #FC004E",
                letterSpacing: '0%'
              }}
            >
              Discover your way to success with Fametonic:
            </h2>

            {/* Features */}
            <div className="mt-[22px] lg:mt-[16px] mb-[22px] lg:mb-[30px]">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-[11px] mb-[10px] lg:mb-[13px]">
                  <div className="w-[22px]">
                    <Image src="/images/star.png" alt="Star" width={22} height={22} />
                  </div>
                  <span
                    className="text-[16px] font-medium leading-[22px] align-middle w-full "
                    style={{ fontFamily: "var(--font-figtree)", letterSpacing: '0%' }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Legal Text - Hidden on desktop, shown on mobile */}
            <div className="md:hidden w-[281px] mx-auto">
              <p
                className="text-[12px] font-medium leading-none text-center align-middle text-[#ABABAB] mb-[19px]"
                style={{ fontFamily: "var(--font-figtree)", letterSpacing: '0%' }}
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                className="text-[10px] font-medium leading-none text-center align-middle text-[#ABABAB]"
                style={{ fontFamily: "var(--font-figtree)", letterSpacing: '0%' }}
              >
                Fametonic 2025 © All Rights Reserved.
              </p>
            </div>

            {/* Get Started Button */}
            <div className="mt-[36px] md:mt-0 mb-[40px] lg:mb-[30px]">
              <button
                className="bg-[#FC004E] text-white font-bold rounded-[10px] transition-all duration-300 flex items-center justify-center w-full md:w-[313px] h-[45px] text-[18px] shadow-[2px_2px_10px_0px_#00E7F9]"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                <span className="pr-[10px] font-bold text-[20px] leading-none align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>GET STARTED</span>
                <img src="/images/arrow.png" alt="Arrow" className="w-[8px]" />
              </button>
              <div className="md:w-[313px]">
                <p
                  className="mt-[10px] text-[12px] font-normal leading-[16px] text-center align-middle text-[#ccc]"
                  style={{ fontFamily: "var(--font-figtree)", letterSpacing: '0%' }}
                >
                  1-minute quiz for personalized insights
                </p>
              </div>
            </div>

            {/* Legal Text - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block mt-6">
              <p
                className="text-[12px] text-[#ABABAB] mb-2"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                className="text-[10px] text-[#ABABAB]"
                style={{ fontFamily: "var(--font-figtree)" }}
              >
                Fametonic 2025 © All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Phone Image */}
          <div className="w-full md:w-auto flex justify-center absolute md:absolute top-[-30px] md:top-[-55px] lg:top-[-85px] md:right-[10px] z-2">
            <Image
              src="/images/phone.png"
              alt="Phone"
              width={666}
              height={679}
              className="lg:w-[666px] lg:h-[679px] w-[280px] sm:w-[390px] md:w-[450px]"
            />
          </div>
          {/* <div className="absolute top-[-95px] right-[0px] z-0"> 
            <Image src="/images/phone.png" alt="Phone" width={666} height={679} /> 
          </div> */}
        </div>
      </main>
    </div>
  );
}
