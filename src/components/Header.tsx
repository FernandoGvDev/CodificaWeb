// src/components/Header.tsx
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // ✅ ícones modernos

export interface MenuItem {
  name: string;
  href: string;
  highlight?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Início", href: "/", highlight: false },
  { name: "Sites", href: "/sites", highlight: true },
  { name: "Sistemas", href: "/sistemas", highlight: false },
  { name: "Contato", href: "/#contato", highlight: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSmoothScroll = (href: string) => {
    const [, hash] = href.split("#");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderItem = (item: MenuItem, i: number) => {
    const baseClass =
      "px-4 py-3 rounded-lg font-medium text-lg w-full text-center transition-colors";
    const highlightClass = item.highlight
      ? "bg-pink-500 text-white shadow-md"
      : "text-gray-700 hover:text-blue-600";

    if (/^https?:\/\//.test(item.href)) {
      return (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`${baseClass} ${highlightClass}`}
          onClick={() => setOpen(false)}
        >
          {item.name}
        </a>
      );
    }

    if (item.href.includes("#")) {
      return (
        <button
          key={i}
          className={`${baseClass} ${highlightClass}`}
          onClick={() => {
            setOpen(false);
            const [path] = item.href.split("#");
            if (location.pathname !== path) {
              navigate(path);
              setTimeout(() => handleSmoothScroll(item.href), 300);
            } else {
              handleSmoothScroll(item.href);
            }
          }}
        >
          {item.name}
        </button>
      );
    }

    return (
      <NavLink
        key={i}
        to={item.href}
        className={({ isActive }) =>
          `${baseClass} ${highlightClass} ${isActive ? "text-blue-600" : ""}`
        }
        onClick={() => setOpen(false)}
      >
        {item.name}
      </NavLink>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-700"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Codifica Web
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          {menuItems.map((item, i) => renderItem(item, i))}
        </nav>

        {/* Botão Mobile com ícones modernos */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-blue-700"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col items-center justify-center px-4 py-6 gap-3">
            {menuItems.map((item, i) => renderItem(item, i))}
          </div>
        </div>
      )}
    </header>
  );
}
