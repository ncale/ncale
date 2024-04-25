"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <header className="mb-8 font-app-special">
      <div>
        <ul className="[&>*]:inline">
          {links.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={currentPath === href ? "line-through" : ""}
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

const links: NavLink[] = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
];
type NavLink = { name: string; href: `/${string}` };
