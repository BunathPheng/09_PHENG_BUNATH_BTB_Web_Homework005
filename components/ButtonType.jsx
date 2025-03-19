"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function ButtonType({ name }) {
    const pathname = usePathname();
    const formattedTitle = name || 
        (pathname === "/" ? "Home Page" : 
        pathname.replace(/\//g, "").replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()));

    return (
        <button className="bg-[#f5f7f8] p-3 rounded-xl font-bold text-[#409aa5]">
            {formattedTitle}
        </button>
    );
}
