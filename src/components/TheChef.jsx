


export default function TheChef(){
    return(
        <section className="flex p-48">
            <div className="w-1/2 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-11 text-center w-[35rem] ">
                    <h3 className="font-semibold text-6xl">Our <span className="text-vert font-bold">Dhabi</span> Restaurant Expert Chef</h3>
                    <p className="text-2xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion</p>
                </div>
            </div>
            <div className="relative w-1/2 flex justify-center items-center ">
                <img className="" src="/assets/chefcircle.png" alt="" />
                <img className="absolute bottom-12" src="/assets/cuisto.png" alt="" />
            </div>

        </section>
    )
}