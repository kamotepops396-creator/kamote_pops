import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const sections = ["home", "about", "menu", "order"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="bg-[rgb(247,238,237)] p-5 flex justify-between items-center fixed w-full top-0 z-50">
      
      
      <h1 className="text-2xl font-bold text-secondary">Kamote Pops</h1>

     
      <ul className="hidden md:flex gap-8">
        {sections.map((sec) => (
          <li key={sec} className="relative">
            <a
              href={`#${sec}`}
              className={`pb-1 transition-colors font-semibold text-lg ${
                active === sec
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary transform transition-transform duration-300 ${
                  active === sec ? "scale-x-100" : "scale-x-0"
                } origin-left`}
              />
            </a>
          </li>
        ))}
      </ul>

     
      <button
        className="md:hidden text-secondary text-2xl"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </button>


      {open && (
        <div className="absolute top-20 left-0 w-full bg-[rgb(247,238,237)] shadow-md md:hidden">
          <ul className="flex flex-col p-5 gap-4">
            {sections.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  onClick={closeMenu}
                  className={`block py-2 font-semibold text-lg ${
                    active === sec
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}