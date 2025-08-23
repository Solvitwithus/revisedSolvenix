
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import { Navmenu } from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react"; // Hamburger + close icons

export function Navbar() {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#5A889E] text-white relative z-50">
      {/* Desktop Logo */}
      <Link
        href="/"
        className="hidden md:block hover:opacity-80 cursor-pointer"
      >
        <Image src={Logo} alt="logo-section" className="w-32 h-auto" />
      </Link>

      {/* Phone number */}
      <p className="font-bold text-[#000000] text-sm md:text-base">
        +254 746741528
      </p>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {Navmenu.map((val) => (
          <Link
            href={val.link}
            key={val.name}
            className={clsx(
              "text-lg font-serif hover:underline",
              currentPath === val.link
                ? "text-[#5F7A47] underline font-bold"
                : "text-white font-medium"
            )}
            aria-current={currentPath === val.link ? "page" : undefined}
          >
            {val.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-white cursor-pointer z-50"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-40 rounded-md bg-[#24a3d4] p-4 flex flex-col gap-4 z-50 md:hidden">
          {Navmenu.map((val) => (
            <Link
              href={val.link}
              key={val.name}
              className={clsx(
                "text-lg font-serif hover:underline hover:bg-[#87ceeb] hover:rounded-md hover:text-center",
                currentPath === val.link
                  ? "text-[#5F7A47] underline font-bold"
                  : "text-white font-medium"
              )}
              aria-current={currentPath === val.link ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {val.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
