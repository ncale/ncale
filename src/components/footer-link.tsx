import type { ReactNode } from "react";

export function FooterLink(props: { href: string; children: ReactNode }) {
  return (
    <p className="text-xs">
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    </p>
  );
}
