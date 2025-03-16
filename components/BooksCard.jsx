import React from 'react'

export default function BooksCard({image , des , title}) {
  return (
   <>
     <div className="flex bg-white rounded-xl shadow-md overflow-hidden max-w-3xl max-h-56 relative">
      {/* Book Cover Image */}
     
      <div className="flex-shrink-0 w-32 md:w-48">
        <img 
          className="w-full h-full object-cover" 
          src={image} 
          alt= {title} 
        />
      </div>
      
      {/* Book Description */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-slate-800 line-clamp-1">{title}</h2>
        <p className="mt-2 text-slate-600 text-sm line-clamp-5">
          {des}
        </p>
        
        {/* Read Full Article Button */}
        <div className="mt-4">
          <button className="bg-slate-200 hover:bg-slate-300 rounded-xl font-bold text-slate-700  py-1 px-4  text-sm ">
            READ FULL ARTICLE
          </button>
        </div>
      </div>
    </div>
   </>
  )
}
