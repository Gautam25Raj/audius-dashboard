import { MdHome } from "react-icons/md";
import { MdDynamicFeed } from "react-icons/md";
import { IoAlbumsOutline } from "react-icons/io5";
import { TfiMicrophoneAlt } from "react-icons/tfi";

import Image from "next/image";

import MenuLink from "./menuLink/MenuLink";

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Home", path: "/home", icon: <MdHome /> },
      {
        title: "Feeds",
        path: "/feeds",
        icon: <MdDynamicFeed />,
      },
      {
        title: "Albums",
        path: "/albums",
        icon: <IoAlbumsOutline />,
      },
      {
        title: "Artists",
        path: "/artists",
        icon: <TfiMicrophoneAlt size={20} />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className="top-10 p-4 w-64 text-black border-r border-gray-200 h-full">
      <div className="flex items-center gap-4 mb-6">
        <Image
          className="rounded-full object-cover"
          src="/logo.png"
          alt="User Image"
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-semibold">BeatStars</span>
          <span className="text-xs text-gray-400">Audius Dashboard</span>
        </div>
      </div>

      <ul className="space-y-4">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-gray-400 font-bold text-sm mb-2">
              {cat.title}
            </span>
            <ul className="space-y-2">
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
