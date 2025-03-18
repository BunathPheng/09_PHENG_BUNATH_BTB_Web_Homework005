"use client";
import { usePathname } from "next/navigation";
import React from "react";


export default function ButtonType() {
    const pathname = usePathname();
    let formattedTitle = "";
    if (pathname === "/") {
       return <>
        <button className="bg-[#f5f7f8] p-3 rounded-xl font-bold text-[#409aa5]">
            {"Home Page"}
        </button>
       </>;
    }
    formattedTitle = pathname
    .replace(/\//g, "")
    .replace(/-/g, " ") 
    .replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <button className="bg-[#f5f7f8] p-3 rounded-xl font-bold text-[#409aa5]">
            {formattedTitle}
        </button>
    );
}
