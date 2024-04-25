"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <header className="fixed top-0 mt-6 w-11/12 bg-paperTransparent md:mt-12 md:h-screen md:w-40">
      <div className="bg-rainbow-gradient flex justify-between rounded p-4 pt-3 shadow-lg md:flex-col md:justify-start">
        <div className="w-20 font-bold md:mb-1">
          nickbrodeur.com / ncale.eth
        </div>
        <ul className="flex flex-row md:flex-col">
          {links.map(([name, path], i) => (
            <li className="hover-grow ml-2 w-fit md:ml-0" key={i}>
              <Link
                href={path}
                className={currentPath === path ? "font-bold" : ""}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

const links: Array<[string, `/${string}`]> = [
  ["home", "/"],
  ["projects", "/projects"],
];
