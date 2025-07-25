import { useState } from "react";
import "./App.css";

const faqs = [
  {
    question: "What is real estate tokenization?",
    answer:
      "Real estate tokenization is a process that converts property ownership into digital tokens on a blockchain. Each token represents a share of the property, making it easier to buy and sell real estate. This process simplifies real estate investment, increases liquidity, and reduces barriers like high costs and complex paperwork.",
  },
  {
    question: "Is PRYPCO Mint licensed?",
    answer: "Real estate tokenization is a process that converts property ownership into digital tokens on a blockchain. Each token represents a share of the property, making it easier to buy and sell real estate. This process simplifies real estate investment, increases liquidity, and reduces barriers like high costs and complex paperwork.",
  },
  {
    question: "Who can invest with PRYPCO Mint?",
    answer: "Real estate tokenization is a process that converts property ownership into digital tokens on a blockchain. Each token represents a share of the property, making it easier to buy and sell real estate. This process simplifies real estate investment, increases liquidity, and reduces barriers like high costs and complex paperwork.",
  },
  {
    question: "How much do I need to start investing?",
    answer: "Real estate tokenization is a process that converts property ownership into digital tokens on a blockchain. Each token represents a share of the property, making it easier to buy and sell real estate. This process simplifies real estate investment, increases liquidity, and reduces barriers like high costs and complex paperwork.",
  },
  {
    question: "How can I exit my investment?",
    answer: "Real estate tokenization is a process that converts property ownership into digital tokens on a blockchain. Each token represents a share of the property, making it easier to buy and sell real estate. This process simplifies real estate investment, increases liquidity, and reduces barriers like high costs and complex paperwork.",
  },
];
function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="header w-full fixed left-0 right-0 top-0 z-20">
        <div className="sm:p-5 p-3 bg-[#2b2a33] m-auto rounded-2xl flex justify-between items-center xl:mx-12 mx-4 mt-6">
          <div className="header-menu sm:w-1/3 w-1/5">
            <div className="toggle-btn xl:hidden cursor-pointer" onClick={toggleMenu}>
              <div className="w-8 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
            <ul
              className={`${menuOpen ? "block" : "hidden xl:flex gap-8"
                } `}
            >
              <li>
                <a href="#" className="text-white hover:text-[#FF861D] transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FF861D] transition">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FF861D] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#FF861D] transition">
                  Media
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:w-1/3 w-2/5 flex justify-center">
            <a href="#">
              <img src="./src/img/logo.png" alt="Logo" />
            </a>
          </div>

          <div className="w-1/3 flex justify-end">
            <a href="#" className="btn sm:py-3 px-6 py-1 text-white bg-[#FF861D] rounded-xl">
              Login
            </a>
          </div>
        </div>
      </header>

      <section className="hero sm:pt-52 pt-42 pb-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="mb-4">MISSED OUR LATEST DROP?</h1>
              <h4 className="text-orang mb-4">MORE TOKENIZED PROPERTIES ARE COMING SOON!</h4>
              <p className="text">Stay tuned and make sure your PRYPCO Mint wallet is topped up! Get started</p>
              <a href="#" className="btn py-3 px-10 mt-10">Get started</a>
            </div>
            <div>
              <img src="./src/img/hero-img.png" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-5">
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/card.svg" /></div>
              <h4>Starting from AED 2,000</h4>
            </div>
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/trend.svg" /></div>
              <h4>8-12% net annual ROI*</h4>
            </div>
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/blocks.svg" /></div>
              <h4>Fractional ownership</h4>
            </div>
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/link.svg" /></div>
              <h4>Blockchain backed</h4>
            </div>
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/tokens.svg" /></div>
              <h4>Buy and sell tokens</h4>
            </div>
            <div className="bg-[#2b2a33cc] rounded-2xl p-5 hover-eff">
              <div className="w-14 h-14 rounded-full p-3 bg-orang sm:mb-15 mb-6 flex items-center justify-center"><img className="filter-[invert(1)]" src="./src/img/lock.svg" /></div>
              <h4>Full transparency</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-center">Enter the future of <br />real estate</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-12">
            <div className="relative overflow-hidden rounded-2xl bg-white hover-eff">
              <img className="h-64 w-full" src="./src/img/real-estate-img1.png" />
              <div className="p-6">
                <h5 className="text-black flex items-center gap-2"> <img src="./src/img/map-icon.svg" /> Dubai Hills Estate</h5>
                <h4 className="mt-3 mb-6 text-black">Two Bedroom Apartment in Park Ridge Tower C</h4>
                <div className="grid grid-cols-2 border border-neutral-500 rounded-full mb-7">
                  <span className="text-center p-2 text-[14px] border-r border-neutral-500 text-neutral-600"><strong>12.51%</strong> Projected ROI</span>
                  <span className="text-center p-2 text-[14px] text-neutral-600"><strong>7.01%</strong> Gross yield</span>
                </div>
                <a href="#" className="btn py-3 px-8 w-full"> Join PRYPCO Mint</a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white hover-eff">
              <img className="h-64 w-full" src="./src/img/real-estate-img2.png" />
              <div className="p-6">
                <h5 className="text-black flex items-center gap-2"> <img src="./src/img/map-icon.svg" /> Dubai Hills Estate</h5>
                <h4 className="mt-3 mb-6 text-black">Two Bedroom Apartment in Park Ridge Tower C</h4>
                <div className="grid grid-cols-2 border border-neutral-500 rounded-full mb-7">
                  <span className="text-center p-2 text-[14px] border-r border-neutral-500 text-neutral-600"><strong>12.51%</strong> Projected ROI</span>
                  <span className="text-center p-2 text-[14px] text-neutral-600"><strong>7.01%</strong> Gross yield</span>
                </div>
                <a href="#" className="btn py-3 px-8 w-full"> Join PRYPCO Mint</a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white hover-eff">
              <img className="h-64 w-full" src="./src/img/real-estate-img3.png" />
              <div className="p-6">
                <h5 className="text-black flex items-center gap-2"> <img src="./src/img/map-icon.svg" /> Dubai Hills Estate</h5>
                <h4 className="mt-3 mb-6 text-black">Two Bedroom Apartment in Park Ridge Tower C</h4>
                <div className="grid grid-cols-2 border border-neutral-500 rounded-full mb-7">
                  <span className="text-center p-2 text-[14px] border-r border-neutral-500 text-neutral-600"><strong>12.51%</strong> Projected ROI</span>
                  <span className="text-center p-2 text-[14px] text-neutral-600"><strong>7.01%</strong> Gross yield</span>
                </div>
                <a href="#" className="btn py-3 px-8 w-full"> Join PRYPCO Mint</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="md:flex items-center justify-between py-5 sm:px-10 px-6 bg-[#2b2a33] m-auto rounded-2xl gap-20">
            <h3>Enter the future of Dubai's real estate market from just <span className="text-orang">AED 2,000.</span></h3>
            <a href="#" class="btn py-3 px-10 flex-shrink-0 mt-5 md:mt-0">Get started</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <h2>Tokenization at a glance</h2>
            </div>
            <div>
              <p className="mb-5 text-neutral-400">Real estate tokenization is the process of transforming real-world assets (properties) into virtual assets (tokens) stored on a blockchain.</p>
              <p className="text-neutral-400">Instead of relying on traditional methods and lengthy transactions, the properties' title deeds are registered on the blockchain, making real estate fractional ownership easier, transparent, and more accessible.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20 gap-10 items-center bg-white rounded-2xl sm:p-10 p-6">
            <div>
              <video class="h-full w-full rounded-2xl" autoPlay muted loop>
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div>
              <h3 className="text-orang sm:mb-8 mb-4">What is a token?</h3>
              <p className="text-neutral-600 text-[20px] mb-4 leading-8">A token is a digital unit of ownership stored on a blockchain.</p>
              <p className="text-neutral-600 text-[20px] leading-8">For example, in real estate, a property can be divided into 1,000,000 tokens, and each token represents a fraction of ownership. Buying 10,000 tokens would give you 1% ownership of the property.</p>
              <a href="#" class="btn py-3 px-10 mt-10">Get started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 class="text-center">We take care of it all</h2>
          <div className="grid sm:grid-cols-2 md:gap-20 gap-5">
            <div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Property sourcing</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Asset tokenization</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Dividend distribution</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
            </div>
            <div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Property funding</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Property management</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
              <div className="border-l-4 border-[#FF861D] pl-8 sm:mt-20 mt-10">
                <h3 className="mb-6">Exit strategy</h3>
                <p class="text-neutral-400 text-[20px] leading-8">Our expert team identifies and selects high-potential properties for tokenization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="md:flex items-center justify-between py-5 sm:px-10 px-6 bg-[#2b2a33] m-auto rounded-2xl gap-20">
            <h3>Explore Dubai's best rental properties, <br /> tokenized for you.</h3>
            <a href="#" class="btn py-3 px-10 flex-shrink-0 mt-5 md:mt-0">Get started</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="sm:flex gap-20 items-start">
            <div className="sm:w-1/4">
              <h2 className="text-4xl font-bold mb-6">FAQs</h2>
            </div>

            <div className="sm:w-3/4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-5 text-left focus:outline-none cursor-pointer"
                  >
                    <h4>{faq.question}</h4>
                    <span className="text-orang text-[30px]">
                      {activeIndex === index ? "−" : "›"}
                    </span>
                  </button>
                  {activeIndex === index && faq.answer && (
                    <p className="text-gray-300 pb-4 transition-all duration-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-10">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-5 p-5 bg-[#2b2a33] m-auto rounded-2xl text-center">
            <a href="#"> <img src="./src/img/logo.png" /> </a>
            <p className="text-neutral-400 text-[14px] ">Copyright © Singhsoft.com 2000 - 2025. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
