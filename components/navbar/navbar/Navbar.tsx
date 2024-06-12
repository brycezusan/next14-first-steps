import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-20 p-3 rounded">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>
      <div className="flex flex-1 justify-end">
        {navItems.map(( navItem ) => (
          <ActiveLink  key={navItem.text} {...navItem} />
        ))}
      </div>
    </nav>
  );
};
