import { X } from "lucide-react";

export default function OverlayNavigation({ setOpenOverlayNav }) {
  return (
    <div className="overlay-bg fixed left-0 top-0 h-screen w-full">
      <div className="mx-auto flex h-full w-[83%] max-w-[400px] flex-col justify-between py-8">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between border-b border-solid border-[rgba(255,255,255,0.2)] pb-8">
            <img
              className="text-white"
              src="images/logo-bookmark.svg"
              alt="website logo"
            />
            <button
              className="text-white"
              onClick={() => setOpenOverlayNav(false)}
              aria-label="Close navigation"
            >
              <X />
            </button>
          </div>
          <ul className="mb-4">
            {["features", "pricing", "contact"].map((navLink) => (
              <li
                key={navLink}
                className="w-full border-b border-solid border-[rgba(255,255,255,0.2)] py-4 text-center"
              >
                <a
                  href="#"
                  className="text-xl font-light uppercase tracking-widest text-white"
                >
                  {navLink}
                </a>
              </li>
            ))}
          </ul>
          <button className="border-2 border-solid border-white py-2">
            <a
              href="#"
              className="text-xl uppercase tracking-widest text-white"
            >
              login
            </a>
          </button>
        </div>
        <ul className="flex items-center justify-center gap-8">
          <a href="#" aria-label="Go to facebook">
            <img src="images/icon-facebook.svg" alt="Facebook icon" />
          </a>
          <a href="#" aria-label="Go to twitter">
            <img src="images/icon-twitter.svg" alt="Twitter icon" />
          </a>
        </ul>
      </div>
    </div>
  );
}
