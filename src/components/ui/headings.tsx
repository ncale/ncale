import { type HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ children, ...props }: HeadingProps) {
  return (
    <h1 {...props} className="text-3xl font-bold">
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: HeadingProps) {
  return (
    <h2 {...props} className="text-2xl font-semibold">
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: HeadingProps) {
  return (
    <h3 {...props} className="text-xl font-medium">
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: HeadingProps) {
  return (
    <h4 {...props} className="text-lg font-medium">
      {children}
    </h4>
  );
}

export function H5({ children, ...props }: HeadingProps) {
  return (
    <h5 {...props} className="text-base font-medium">
      {children}
    </h5>
  );
}

export function H6({ children, ...props }: HeadingProps) {
  return (
    <h6 {...props} className="text-sm font-medium">
      {children}
    </h6>
  );
}
