"use client";

import {
  Airplane, Book, Camera, Code, Edit, EmojiHappy, Home2,
  Music, Setting2, Video, Weight
} from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/"; 
    return pathname.startsWith(href);
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home2 },
    { name: "Book Categories", href: "/book-categories", icon: Book },
    { name: "Old-school Cartoons", href: "/old-school-cartoons", icon: EmojiHappy },
    { name: "Movies & TV Shows", href: "/movies", icon: Video },
    { name: "Music", href: "/music", icon: Music },
    { name: "Photography", href: "/photography", icon: Camera },
    { name: "Sport & Fitness", href: "/fitness", icon: Weight },
    { name: "Technology & Gadgets", href: "/technology", icon: Code },
    { name: "Travel & Exploration", href: "/travel", icon: Airplane },
    { name: "Writing & Journaling", href: "/writing", icon: Edit },
    { name: "Settings", href: "/settings", icon: Setting2, isBottom: true },
  ];

  return (
    <aside className="bg-[#f5f7f8] min-h-full">
      <div className="max-w-96 bg-white sticky top-0 overflow-auto h-screen no-scrollbar">
        <div className="space-y-4 xl:space-y-6 p-6">
          <img
            className="mx-auto rounded-full h-36 w-36 object-cover"
            src="https://i.pinimg.com/736x/2c/eb/08/2ceb086ac66d4f52f29193c0b502a5a7.jpg"
            alt="author avatar"
          />
          <div className="space-y-2 text-center">
            <h3 className="text-blue-600 text-lg font-medium">Pheng Bunath</h3>
            <p className="text-black text-xl">BunathPheng@gmail.com</p>
          </div>
        </div>

        <ul className="list-none px-6 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (

              <li key={item.href} className={`m-3 p-3 px-3 rounded-lg transition-all duration-300 ${active ? 'bg-slate-100 font-bold rounded-xl' : 'hover:bg-gray-100  rounded-xl'}`}>
                <Link href={item.href} className="flex items-center text-gray-700 hover:text-gray-900">
                  <Icon color={item.isBottom ? "#718096" : "#ff0000"} variant="Outline" size={25} />
                  <span className={`ml-4 text-md ${active ? 'text-gray-900' : 'text-gray-700'}`}>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
