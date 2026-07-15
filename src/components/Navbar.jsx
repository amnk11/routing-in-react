import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Jobs", path: "/jobs" },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <NavLink
          to="/"
          className="cursor-pointer text-3xl font-black tracking-tight"
        >
          <span className="bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Aman
          </span>
          <span className="text-amber-400">.</span>
        </NavLink>

        <ul className="flex items-center gap-12 text-[15px] font-medium">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-linear-to-r after:from-amber-300 after:to-orange-500 after:transition-all after:duration-300 ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="rounded-xl bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-500/40 active:scale-95"
          onClick={() => navigate("/contact", { replace: true })}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
