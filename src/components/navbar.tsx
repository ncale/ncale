"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <header className="fixed top-0 w-11/12 mt-6 md:w-40 md:mt-12 md:h-screen bg-paperTransparent">
      <div className="bg-rainbow-gradient p-4 pt-3 rounded flex justify-between md:flex-col md:justify-start shadow-lg">
        <div className="font-bold w-20 md:mb-1">
          nickbrodeur.com / ncale.eth
        </div>
        <ul className="flex flex-row md:flex-col">
          {links.map(([name, path], i) => (
            <li className="ml-2 md:ml-0 w-fit hover-grow" key={i}>
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
