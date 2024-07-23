import Link, { LinkProps } from "next/link";
import React from "react";
import { btnColor, btnSize } from "./Button";

interface AnchorProps extends LinkProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "orange" | "black" | "red";
}

const Anchor = ({
  children,
  href,
  size = "md",
  color = "orange",
}: AnchorProps) => {
  return (
    <Link
      href={href}
      className={`${btnSize[size]} ${btnColor[color]} text-white font-semibold ml-2 hover:bg-amber-400 rounded`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
