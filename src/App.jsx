import { useEffect, useState } from "react";

import OverlayNavigation from "./components/OverlayNavigation";
import NavigationBar from "./components/NavigationBar";
import Accordion from "./components/Accordion";

export default function App() {
  return <BookmarkPage />;
}

function BookmarkPage() {
  const [openOvarlayNav, setOpenOverlayNav] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setOpenOverlayNav(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <>
      <header className="mx-auto w-[83%] max-w-[400px] md:max-w-[990px]">
        <div className={`${openOvarlayNav ? "block" : "hidden"}`}>
          <OverlayNavigation
            openOvarlayNav={openOvarlayNav}
            setOpenOverlayNav={setOpenOverlayNav}
          />
        </div>
        <NavigationBar
          openOvarlayNav={openOvarlayNav}
          setOpenOverlayNav={setOpenOverlayNav}
        />
      </header>
      <main className="mx-auto flex w-[83%] max-w-[400px] flex-col gap-32 py-4 md:max-w-[990px]">
        <HeroSection />
        <FeaturesSection />
        <ExtensionSection />
        <FAQSection />
      </main>
      <footer className="mt-16">
        <Footer />
      </footer>
    </>
  );
}

function HeroSection() {
  return (
    <section className="grid auto-rows-auto grid-cols-1 items-center pt-8 md:grid-cols-2">
      <img
        className="md:col-[2_/_3]"
        src="images/illustration-hero.svg"
        alt="Illustration hero"
      />
      <div className="flex flex-col gap-4 md:col-[1_/_2] md:row-[1_/_2]">
        <h1 className="text-center text-3xl font-medium md:pr-10 md:text-start lg:pr-24">
          A Simple Bookmark Manager
        </h1>
        <p className="text-center leading-6 text-gray-400 md:pr-10 md:text-start lg:pr-24">
          A clean and simple interface to oranize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <a
            href="#"
            className="cs-button border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:text-blue-600"
          >
            Get it on Chrome
          </a>
          <a
            href="#"
            className="cs-button border-grey-50 bg-grey-50 hover:border-black hover:bg-transparent hover:text-black"
          >
            Get it on Firefox
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const featureData = [
    {
      img: "illustration-features-tab-1.svg",
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      img: "illustration-features-tab-2.svg",
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to traw! through all of your bookmakrs",
    },
    {
      img: "illustration-features-tab-3.svg",
      title: "Share your bookmarks",
      text: "Easily share yourbookmakrs and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];
  const feature = featureData[currentFeature];
  return (
    <section className="flex flex-col gap-6">
      <div className="flex w-full flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">Features</h2>
        <p className="mx-auto max-w-[400px] text-center leading-6 text-gray-400">
          Our aim is to make it quick and easy for you to access your favourite
          website. Your bookmarks sync between your devices so you can access
          them on the go
        </p>
      </div>
      <div className="flex flex-col gap-10 md:gap-16">
        <ul className="flex flex-col justify-center md:flex-row">
          {["simple bookingmarking", "seedy searching", "easy sharing"].map(
            (feature, index) => (
              <li
                key={feature}
                className="border-b border-solid px-8 py-4 text-center"
              >
                <button
                  className={`${
                    currentFeature === index ? "text-black" : "text-gray-400"
                  } relative text-center text-lg font-medium transition-colors duration-300 hover:text-black md:text-base`}
                  onClick={() => setCurrentFeature(index)}
                  aria-label={`Display ${feature} feature detail`}
                >
                  {feature}
                  <span
                    className={`${
                      currentFeature === index ? "block" : "hidden"
                    } absolute -bottom-[60%] left-0 h-[3px] w-full bg-red-400`}
                  ></span>
                </button>
              </li>
            ),
          )}
        </ul>
        <div className="grid auto-rows-auto grid-cols-1 items-center gap-20 md:grid-cols-2">
          <img src={`images/${feature.img}`} alt={`${feature.title} image`} />
          <div className="flex flex-col gap-6">
            <h2 className="text-center text-2xl font-medium md:text-start">
              {feature.title}
            </h2>
            <p className="max-w-[400px] text-center leading-6 text-gray-400 md:text-start">
              {feature.text}
            </p>
            <div className="hidden md:block">
              <a
                href="#"
                className="cs-button border-blue-600 bg-blue-600 text-white hover:bg-transparent hover:text-blue-600"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtensionSection() {
  const extensionData = [
    { img: "logo-chrome.svg", name: "Chrome", minimumVer: 62 },
    { img: "logo-firefox.svg", name: "Firefox", minimumVer: 55 },
    { img: "logo-opera.svg", name: "opera", minimumVer: 46 },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center text-2xl font-medium">
        Download the extension
      </h2>
      <p className="mx-auto max-w-[400px] text-center text-gray-400">
        We've got more browsers in the pipeline. Please do let us know if
        your've got a favourite you'd like us to prioritize.
      </p>
      <ul className="mt-4 flex flex-col justify-center gap-8 md:flex-row">
        {extensionData.map((ed, index) => (
          <li
            style={{
              position: "relative",
              top: `${index}rem`,
            }}
            key={ed.name}
            className={`rounded-xl bg-dots bg-contain bg-[10%_75%] bg-no-repeat px-4 pb-4 pt-8 shadow-lg`}
          >
            <div className="flex flex-col items-center">
              <img
                className="mb-4"
                src={`images/${ed.img}`}
                alt={`${ed.name} logo`}
              />
              <h3 className="my-1 text-xl font-medium">Add to {ed.name}</h3>
              <p className="font-medium text-gray-400">
                Minimum version {ed.minimumVer}
              </p>
              <button className="cs-button mt-11 bg-blue-600 text-white hover:border-blue-600 hover:bg-transparent hover:text-blue-600">
                Add & Install Extension
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQSection() {
  const fqas = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-medium">
        Frequently Asked Questions
      </h2>
      <p className="mx-auto max-w-[400px] text-center font-medium text-gray-400">
        Here are some of our FAQs. If your have any other questions you'd like
        answered please feel free to email us.
      </p>
      <ul className="mx-auto flex w-full max-w-[400px] flex-col border-t border-solid">
        {fqas.map((fqa) => (
          <li key={fqa.question} className="group border-b border-solid">
            <Accordion question={fqa.question} answer={fqa.answer} />
          </li>
        ))}
      </ul>
      <button className="cs-button mt-8 border-blue-600 bg-blue-600 text-white transition-colors duration-300 hover:bg-transparent hover:text-blue-600">
        More Info
      </button>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  function isValidEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function handleSubmit(e) {
    console.log("check");
    e.preventDefault();
    if (!isValidEmail()) {
      setEmailError("Whoops, make sure it's an email");
    } else {
      setEmailError(null);
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 bg-blue-600 px-8 pb-8 pt-10 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white">
          35,000+ already joinded
        </p>
        <h2 className="mx-auto max-w-[400px] text-2xl font-medium text-white">
          Stay up-to-date with what we're doing
        </h2>
        <form className="mt-4 flex flex-col justify-center gap-4 md:flex-row">
          <div className="relative rounded-md">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              className={`${
                emailError ? "border-red-400" : ""
              } rounded-md border-2 border-solid px-4 py-3`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailError(null)}
              placeholder="Enter your email address"
            />
            {emailError ? (
              <i className="absolute -bottom-[39%] left-0 w-full rounded-b-md bg-red-400 px-2 py-1 text-start text-[10px] font-medium text-white">
                Whoops. make sure it's an email
              </i>
            ) : (
              ""
            )}
          </div>
          <button
            className="cs-button border-red-400 bg-red-400 text-white transition-colors duration-300 hover:bg-white hover:text-red-400"
            type="submit"
            onClick={handleSubmit}
          >
            Cintact Us
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-between gap-12 bg-blue-950 px-8 py-8 text-center md:flex-row">
        <div className="flex items-center gap-4">
          <img src="images/logo-bookmark.svg" alt="Website logo" />
          <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:gap-12 md:text-sm">
            {["features", "pricing", "contact"].map((navLink) => (
              <li key={navLink}>
                <a
                  href="#"
                  className="uppercase text-white transition-colors duration-300 hover:text-red-400"
                >
                  {navLink}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex items-center gap-8">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="Facebook icon" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="Facebook icon" />
          </a>
        </ul>
      </div>
    </>
  );
}
