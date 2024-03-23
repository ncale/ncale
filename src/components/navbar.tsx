"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const currentPath = usePathname()
	return (
		<header className="fixed top-0 w-11/12 pt-6 md:w-40 md:pt-12 md:h-screen bg-white">
			<div className="bg-rainbow-gradient p-4 pt-3 rounded flex justify-between md:flex-col md:justify-start">
				<div className="font-bold w-20 md:mb-1">nickbrodeur.com / ncale.eth</div>
				<ul className="flex flex-row md:flex-col">
					<li className="ml-2 md:ml-0">
						<Link href="/" className={currentPath === "/" ? "font-bold" : ""}>home</Link>
					</li>
					<li className="ml-2 md:ml-0">
						<Link href="/projects" className={currentPath === "/projects" ? "font-bold" : ""}>projects</Link>
					</li>
				</ul>
			</div>
		</header>  
	)
}