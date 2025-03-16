import { Tag2 } from 'iconsax-react'
import React from 'react'

export default function Card({title , image}) {
    return (
        <div  className="group relative block bg-black w-[300px] h-[400px] rounded-3xl">
    <img
        alt=""
        src={image}
        className="absolute inset-0 h-full rounded-3xl w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    />

    <div className="relative flex flex-col justify-between h-full p-2 sm:p-6 lg:p-4">
        <div>
            <div className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-1 rounded-xl bg-white w-fit p-2">
                 <Tag2 color="#409aa5" variant="Outline" size={20} />
                  <p className='text-[#409aa5]'>{title}</p>
            </div>
        </div>

            <div className="transform transition-all duration-300 group-hover:absolute group-hover:inset-0 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:p-8">
                <p className="text-sm text-white opacity-0 group-hover:opacity-100">
                <h1 className='text-xl'>View all Avaiable Books</h1>
            </p>
        </div>
    </div>
</div>
    )
}
