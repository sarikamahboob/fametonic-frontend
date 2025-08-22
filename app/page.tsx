import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen text-white">
      {/* Top Banner */}
      <div className="bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] py-[20px] lg:py-[12px] flex items-center justify-center text-white px-3 text-center">
        <span
          className="font-extrabold text-[16px] sm:text-[20px] md:text-[22px] leading-none align-middle font-figtree tracking-[0%]"
        >
          🚀 <span className="text-[#00e7f9]">FRESH BEGINNINGS SALE: </span>
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>

      {/* Header */}
      <header className="flex items-center lg:items-start mt-[16px] md:mt-[35px] mb-10 max-w-[1124px] mx-auto px-4 md:px-4 lg:px-12 xl:px-0">
        {/* Logo */}
        <div className="flex justify-center md:justify-start z-4 w-full ">
          <Image
            src="/images/logo.png"
            alt="Fametonic Logo"
            width={150}
            height={60}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-[20px] md:gap-[40px] lg:mr-[120px] w-full justify-center md:justify-end">
          <Link
            href="#"
            className="text-[#A9A9A9] font-semibold text-[18px] font-figtree"
          >
            About us
          </Link>
          <Link
            href="#"
            className="text-[#A9A9A9] font-semibold text-[18px] font-figtree"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden absolute right-4">
          <button className="text-3xl">
            <Image src="/images/hamburger.png" alt="Menu" width={20} height={12} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 lg:px-12">
        <div className="max-w-[1124px] mx-auto flex flex-col-reverse md:flex-row items-center relative mt-[57px]">
          {/* Left Content */}
          <div className="w-full md:w-[520px] relative z-10 mt-[242px] sm:mt-[410px] md:mt-0">
            <h1
              className="text-[25px] sm:text-[30px] md:text-[35px] font-bold leading-[1.1] text-center md:text-left align-middle font-urbanist"
            >
              Want to Turn Social Media Into a Profitable Career?
            </h1>

            <h2
              className="text-[25px] sm:text-[28px] md:text-[35px] font-bold text-center md:text-left align-middle leading-[1.1] font-urbanist text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E]"
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
                <div key={i} className="flex items-center gap-[11px] md:gap-[10px] mb-[10px] lg:mb-[13px]">
                  <div className="w-[22px]">
                    <Image src="/images/star.png" alt="Star" width={22} height={22} />
                  </div>
                  <span
                    className="text-[16px] font-semibold leading-[22px] align-middle w-full font-figtree"
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Legal Text - Hidden on desktop, shown on mobile */}
            <div className="md:hidden w-[281px] mx-auto">
              <p
                className="text-[12px] font-medium leading-none text-center align-middle text-[#ABABAB] mb-[19px] font-figtree"
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                className="text-[10px] font-medium leading-none text-center align-middle text-[#ABABAB] font-figtree"
              >
                Fametonic 2025 © All Rights Reserved.
              </p>
            </div>

            {/* Get Started Button */}
            <div className="mt-[36px] md:mt-0 mb-[40px] lg:mb-[30px]">
              <button
                className="bg-[#FC004E] text-white font-bold rounded-[10px] transition-all duration-300 flex items-center justify-center w-full md:w-[313px] h-[45px] text-[18px] shadow-[2px_2px_10px_0px_#00E7F9] font-figtree"
              >
                <span className="pr-[10px] font-bold text-[20px] leading-none align-middle font-figtree">GET STARTED</span>
                <img src="/images/arrow.png" alt="Arrow" className="w-[9px]" />
              </button>
              <div className="md:w-[313px]">
                <p
                  className="mt-[10px] text-[12px] font-normal leading-[16px] text-center align-middle text-[#ffffff] font-figtree"
                >
                  1-minute quiz for personalized insights
                </p>
              </div>
            </div>

            {/* Legal Text - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block mt-6">
              <p
                className="text-[12px] text-[#ABABAB] mb-[12px] font-figtree"
              >
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p
                className="text-[10px] text-[#ABABAB] font-figtree"
              >
                Fametonic 2025 © All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Phone Image */}
          <div className="w-full md:w-auto flex justify-center absolute md:absolute top-[-30px] md:top-[-55px] lg:top-[-85px] md:right-[0px] z-2">
            <Image
              src="/images/phone.png"
              alt="Phone"
              width={666}
              height={679}
              className="lg:w-[666px] lg:h-[679px] w-[280px] sm:w-[390px] md:w-[450px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
