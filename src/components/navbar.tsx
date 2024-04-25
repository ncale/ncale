"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <header className="mb-8 font-app-special">
      <div>
        <ul className="[&>*]:inline">
          {links.map(([name, path], i) => (
            <li key={i}>
              <Link
                href={path}
                className={currentPath === path ? "line-through" : ""}
              >
                {name}
              </Link>
              {i + 1 === links.length ? "" : " | "}
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
