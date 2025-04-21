import { AlignJustify } from "lucide-react";

export default function NavigationBar({ openOvarlayNav, setOpenOverlayNav }) {
  return (
    <nav className={`${openOvarlayNav ? "invisible" : "visible"} pb-4 pt-6`}>
      <div className="flex items-center justify-between">
        <a href="#">
          <img src="images/logo-bookmark.svg" alt="Bookmark logo" />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {["features", "pricing", "contact"].map((navLink) => (
            <li key={navLink}>
              <a
                href="#"
                className="font-medium uppercase transition-colors duration-300 hover:text-red-400"
              >
                {navLink}
              </a>
            </li>
          ))}
          <li>
            <button className="cs-button bg-red-400 px-8 py-2 uppercase text-white hover:border-red-400 hover:bg-transparent hover:text-red-400">
              login
            </button>
          </li>
        </ul>
        <button
          className="md:hidden"
          onClick={() => setOpenOverlayNav(true)}
          aria-label="Open navigation"
        >
          <AlignJustify />
        </button>
      </div>
    </nav>
  );
}
