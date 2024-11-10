import type { ReactNode } from "react";

export function FooterLink(props: { href: string; children: ReactNode }) {
  return (
    <a href={props.href} target="_blank" className="hover:underline">
      {props.children}
    </a>
  );
}
