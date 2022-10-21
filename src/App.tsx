import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { lazy, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

const AboutPage = lazy(() => import("./pages/about"));
const CodePage = lazy(() => import("./pages/code"));
const DesignPage = lazy(() => import("./pages/design"));
const HomePage = lazy(() => import("./pages/home"));

const App = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    console.log("onToggleMenu");
    setIsMenuOpen((prev) => !prev);
  };
  console.log("isMenuOpen", isMenuOpen);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky flex w-full items-center justify-between p-10">
        <NavLink className="text-text-500" to="/">
          <svg
            width="51"
            height="26"
            viewBox="0 0 51 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.7257 17.6193L23.742 20.2617C23.5288 20.5738 23.2147 20.8757 22.975 21.1668L22.9513 21.1986L22.9499 21.1973C20.573 24.0759 16.9774 25.912 12.9559 25.912C5.80536 25.912 0 20.1066 0 12.9561C0 5.80548 5.80536 0.000126746 12.9559 0.000126746C17.4797 0.000126746 21.4653 2.32362 23.7827 5.84136L19.3097 11.8045C18.7653 8.78974 16.1264 6.50009 12.9559 6.50009C9.39283 6.50009 6.49997 9.39296 6.49997 12.9561C6.49997 16.5192 9.39283 19.412 12.9559 19.412C15.45 19.412 17.1527 18.3234 19.0422 16.0974C19.0422 16.0974 27.3505 5.31059 27.4378 5.19414C31.7206 -0.532003 39.8468 -1.70323 45.5729 2.57953C48.7928 4.98833 50.5726 8.61237 50.752 12.3413H50.7534V12.3806C50.7703 12.757 50.771 13.1348 50.7554 13.5126L50.7757 26H44.2988L44.2961 24.1734C39.9429 26.6845 34.3284 26.5281 30.0525 23.3292C28.0268 21.8147 26.5719 19.8189 25.7257 17.6193ZM33.9453 18.1243C31.0923 15.9904 30.5081 11.9412 32.6427 9.08763C34.7766 6.23403 38.8258 5.65045 41.6794 7.78438C44.533 9.91899 45.1166 13.9682 42.982 16.8218C40.848 19.6747 36.7989 20.259 33.9453 18.1243Z"
            />
          </svg>
        </NavLink>
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {["home", "about", "code", "design"].map((route) => {
              return (
                <li key={route}>
                  <NavLink end={true} to={route === "home" ? "/" : route}>
                    {({ isActive }) => (
                      <span
                        className={classNames(
                          "border-b py-1 font-display text-body font-normal text-text-500",
                          {
                            "border-transparent": !isActive,
                            "border-text-500": isActive,
                          }
                        )}
                      >
                        {route}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="flex md:hidden">
          <button onClick={onToggleMenu}>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14276 0.125H21.9998V2.125H3.14276V0.125Z"
                fill="currentcolor"
              />
              <rect
                x="7.85724"
                y="13.875"
                width="14.1428"
                height="2"
                fill="currentcolor"
              />
              <rect y="7" width="21.9999" height="2" fill="currentcolor" />
            </svg>
          </button>
        </nav>
      </header>
      <main className="relative grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="code" element={<CodePage />} />
            <Route path="design/*" element={<DesignPage />}>
              <Route path=":slug" element={<DesignPage />} />
            </Route>
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </AnimatePresence>
      </main>
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 h-full w-full bg-neutral-50">
              menu
            </div>
          )}
        </AnimatePresence>,
        document.querySelector("#portal")!
      )}
    </div>
  );
};

export default App;
