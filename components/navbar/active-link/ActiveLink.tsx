"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}
export const ActiveLink = ({ path, text }: Props) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;
  return (
    <Link
      className={`${isActive ? style.active : ""} ${style.link}`}
      href={path}
    >
      {text}
    </Link>
  );
};
