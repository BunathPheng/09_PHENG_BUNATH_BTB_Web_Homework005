import React from 'react'

export default function CardDetail(data) {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-start justify-between relative">
                <div className="w-full pr-0 md:pr-8">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="flex items-end justify-between">
                                    <div className="items-start">
                                        <div>
                                           
                                            <h1 className="text-2xl font-bold text-[#0b3954]">
                                                {data.book_title || data.ct_title}
                                            </h1>
                                            <div className="mt-2">
                                                <p>
                                                    by{" "}
                                                    <span className="text-[#087e8c] font-medium">
                                                        {data.book_author || data.ct_creator}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                
                                        <div className="flex items-center mt-4 text-gray-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="ml-2">
                                                {data.view_count ? `${data.view_count} times` : "N/A"}
                                            </span>
                                            <span className="mx-2">|</span>
                                            <span>{data.published_year || "Unknown Year"}</span>
                                        </div>
                                    </div>

                                  
                                    <div className="items-end mt-[-100px]">
                                        <img
                                            className="w-fit h-96 rounded-2xl shadow-md object-cover"
                                            src={data.image}
                                            alt={data.book_title || data.ct_title}
                                        />
                                    </div>
                                </div>
                              
                                <p className="mt-6 text-[#0b3954] text-justify">
                                    {data.description || data.ct_description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
