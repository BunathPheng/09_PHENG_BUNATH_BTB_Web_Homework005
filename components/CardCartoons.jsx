import { Eye } from 'iconsax-react';

export default function CardCartoons({ image, title, views, year }) {
    const newYear = year?.split("-")[0] || "Unknown"; // Prevents errors if `year` is undefined

    return (
        <div className="rounded-xl max-w-xs">
            <img
                src={image}
                alt={title}
                className="rounded-xl h-80 w-60 object-cover shadow-md"
            />
            
            <h1 className="text-md font-bold text-[#0b3954] mt-2">{title}</h1>
            <div className="flex items-center mt-2">
                <div className="flex items-center gap-2">
                    <Eye color="#718096" variant="Outline" size={25} />
                    <p className="text-[#087e8b] font-bold">{views} items</p>|
                </div>
                <p className="pl-3 text-[#087e8b] font-bold">{newYear}</p>
            </div>
        </div>
    );
}
