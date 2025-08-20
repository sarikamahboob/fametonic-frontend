import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Banner */}
      <div className="bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] h-[46px] px-[20px] flex items-center justify-center text-sm font-medium text-white">
      <span className="font-extrabold text-[22px] leading-none align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}> 
        🚀 <span className="text-[#00e7f9]">FRESH BEGINNINGS SALE: </span> 
        Extra 25% OFF, Limited Spots - start your journey today!</span>
      </div>


      {/* Header */}
      <header className="flex items-start justify-between px-6 mt-[35px] mb-[57px] lg:px-12 max-w-[1124px] mx-auto">
        <div className="text-2xl font-bold">
          <Image src="/images/logo.png" alt="Fametonic Logo" width={173.12} height={74} />
        </div>
        <nav className="hidden md:flex items-center gap-[40px]">
          <Link href="#" className="text-gray-300 font-semibold text-[18px] leading-none text-center align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>
            About us
          </Link>
          <Link href="#" className="text-gray-300 font-semibold text-[18px] leading-none text-center align-middle" style={{fontFamily: "var(--font-figtree)",letterSpacing: '0%'}}>
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 lg:px-12">
        <div className="max-w-[1124px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="w-[516px]">
            <div className="">
            <h1
              className="text-[35px] font-bold leading-[1.2] align-middle"
              style={{ fontFamily: "var(--font-urbanist)", letterSpacing: "0%" }}
            >
              Want to Turn Social Media Into a <span className="text-white">Profitable Career?</span>
            </h1>

            <h2
              className="text-[35px] font-bold leading-[1.2] align-middle rounded"
              style={{
                fontFamily: "var(--font-urbanist)",
                letterSpacing: "0%",
                color: "#00E7F9",
                textShadow: "0px 4px 4px #FC004E",
              }}
            >
              Discover your way to success with Fametonic:
            </h2>

            </div>

            {/* Feature List */}
             <div className="mt-[16px]">
               <div className="flex items-center gap-[10px]">
                 <Image src="/images/star.png" alt="Star" width={22} height={22} />
                 <span className="text-[16px] font-semibold leading-[22px] align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>Start growing your influence right away—no waiting required!</span>
               </div>
               <div className="flex items-center gap-[10px] mt-[13px]">
                 <Image src="/images/star.png" alt="Star" width={22} height={22} />
                 <span className="text-[16px] font-semibold leading-[22px] align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}> 
                   Create viral TikToks and Reels step by step with easy-to-follow lessons
                 </span>
               </div>
               <div className="flex items-center gap-[10px] mt-[13px]">
                 <Image src="/images/star.png" alt="Star" width={22} height={22} />
                 <span className="text-[16px] font-semibold leading-[22px] align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>Use a Personal AI Worker to boost your content</span>
               </div>
               <div className="flex items-center gap-[10px] mt-[13px]">
                 <Image src="/images/star.png" alt="Star" width={22} height={22} />
                 <span className="text-[16px] font-semibold leading-[22px] align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>Learn from expert-led courses designed for aspiring influencers</span>
               </div>
             </div>

            {/* Get Started Button */}
             <div className="mt-[30px]">
              <button
                className="bg-[#FC004E] text-white font-bold rounded-[10px] transition-all duration-300 transform flex items-center justify-center w-[313px] h-[40px] text-[20px] leading-none align-middle shadow-[2px_2px_10px_0px_#00E7F9]" 
                style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}
              >
                <span className="pr-[10px]">GET STARTED</span> 
                <span className="w-[11px]">
                <img src="/images/arrow.png" alt="Arrow"/>
                </span>
              </button>
              <div className="mt-[10px] w-[313px] text-center">
                <span className="text-[12px] font-normal leading-[16px] align-middle" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>1-minute quiz for personalized insights</span>
              </div>
            </div>

            {/* Legal Text */}
            <div className="text-xs text-gray-500 mt-[30px]">
              <p className="text-[12px] font-medium leading-none align-middle text-[#ABABAB] leading-[1.4] mb-[12px]" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
              <p className="text-[10px] font-medium leading-none align-middle text-[#ABABAB]" style={{fontFamily: "var(--font-figtree)", letterSpacing: '0%'}}>Fametonic 2025 ©All Rights Reserved.</p>
             </div>
          </div>

          {/* Right Content - Phone Mockup */}
        </div>
      </main>
    </div>
  );
}
