"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function SelectCategories({ ca, ba }) {
    const pathname = usePathname();
    const  router =  useRouter();

    // Log props and pathname for debugging
    console.log("pathname:", pathname);
    console.log("ca:", ca);
    console.log("ba:", ba);

    // Check the current route
    const isBookCategories = pathname.includes("/book-categories");
    const isOldSchoolCartoons = pathname.includes("/old-school-cartoons");

    // Determine which data to use based on the route
    const dataToDisplayCa = isOldSchoolCartoons && ca;
    const dataToDisplayBa = isBookCategories && ba;



    return (
        <>
            {
                dataToDisplayCa && (
                    <form className="max-w-sm w-64">
                        <select
                        onChange={(e) => router.replace(`/old-school-cartoons?genre=${e.target.value}`)}
                            id="categories"
                            className="bg-gray-100 rounded-xl border-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="">Filter categories</option>
                            {dataToDisplayCa.payload.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.cartoon_genre}
                                </option>
                            ))}
                        </select>
                    </form>
                )
            }
            {
                dataToDisplayBa && (
                    <form className="max-w-sm w-64">
                        <select
                        onChange={(e) => router.replace(`/book-categories?query=${e.target.value}`)}
                            id="categories"
                            className="bg-gray-100 rounded-xl border-none text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="">Filter categories</option>
                            {dataToDisplayBa.payload.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.book_cate_name}
                                </option>
                            ))}
                        </select>
                    </form>
                )
            }
        </>
    );
}