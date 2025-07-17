import { plates } from "../datas/datas"
import PlateCard from "./PlateCard"

export default function AllPlate(){
    return(
        <section className="bg-[#dae95233] px-4 lg:px-8 2xl:px-32 pt-24 pb-12">
            <div className="flex flex-col items-center gap-16 2xl:gap-24">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl ">Our Delicious and Special Salad <br /> <span className="text-vert font-bold">Asian</span></h1>
                    <p className="text-2xl">Food is any substance consumed by an organism for nutritional support.</p>
                </div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-3 2xl:flex-row gap-3">
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


            <div className="flex flex-col lg:flex-row items-center">
                <div className="grow flex justify-center items-center">
                    <img src="/assets/plate1.png" alt="" className="lg:w-[64rem]" />
                </div>
                <div className="lg:w-[80%] flex flex-col items-center gap-12 text-center 2xl:pr-48">
                    <h2 className="font-semibold text-6xl">Welcome to our <span className="text-vert">Dhabi</span> Restaurant</h2>
                    <p className="text-xl lg:text-lg 2xl:text-2xl">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion</p>
                    <a href="#" className="bg-vert text-xl rounded-full py-4 px-20 2xl:px-24 font-semibold">Find More</a>
                </div>
            </div>
        </section>
    )
}