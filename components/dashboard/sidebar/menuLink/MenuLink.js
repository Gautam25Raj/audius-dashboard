"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`p-5 py-2.5 flex items-center gap-2.5 my-1 rounded-lg hover:bg-[#ff2975]/20 transition-colors ${
        pathname === item.path && "bg-[#8c1eff]/20"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
