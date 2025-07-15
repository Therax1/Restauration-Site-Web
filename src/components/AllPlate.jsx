import { plates } from "../datas/datas"
import PlateCard from "./PlateCard"

export default function AllPlate(){
    return(
        <section className="bg-[#dae95233] px-32 py-12">
            <div className="flex flex-col items-center gap-24">
                <div className="space-y-4">
                    <h1 className="text-4xl text-center">Our Delicious and Special Salad <br /> <span className="text-vert font-bold">Asian</span></h1>
                    <p className="text-2xl">Food is any substance consumed by an organism for nutritional support.</p>
                </div>
                
                <div className="flex gap-3">
                    {
                        plates.map((plate) => (
                            <PlateCard
                                key={plate.id}
                                source={plate.img}
                                title={plate.name}
                                description={plate.description}
                                price={plate.price}
                                alt={plate.alt}
                            />
                        ))
                    }
                </div>
            </div>


            <div className="flex items-center">
                <div className="grow flex justify-center items-center">
                    <img src="/assets/plate1.png" alt="" className="w-[64rem] " />
                </div>
                <div className="w-1/2 flex flex-col items-center gap-12 text-center pr-48">
                    <h2 className="font-semibold text-6xl">Welcome to our <span className="text-vert">Dhabi</span> Restaurant</h2>
                    <p className="text-2xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion</p>
                    <a href="#" className="bg-vert text-xl rounded-full py-4 px-24 font-semibold">Find More</a>
                </div>
            </div>
        </section>
    )
}