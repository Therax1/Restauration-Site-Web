

export default function PlateCard({source, alt, description, title, price}){
    return(
        <article className="bg-white flex flex-col items-center gap-4 py-20 px-4 text-center rounded-tr-[3.5rem] rounded-bl-[3.5rem]">
            <div className="space-y-2">
                <div className="relative size-56 2xl:size-64">
                    <img
                        src={source}
                        alt={alt}
                        className="w-full h-full object-cover drop-shadow-[0px_10px_10px_rgb(0_0_0/_0.3)] rounded-xl"
                    />
                    <span className="absolute top-4 left-4 flex size-12 items-center justify-center rounded-full bg-black text-white text-sm font-bold shadow-2xl">
                        {price}
                    </span>
                </div>
                <h3 className="font-bold text-xl">{title}</h3>
            </div>
            <p className="2xl:text-2xl lg:text-xl">{description}</p>
        </article>
    )
}