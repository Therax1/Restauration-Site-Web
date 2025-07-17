
import Navbar from "./Navbar"
export default function Hero ( ){
    return(

        <header className="relative h-screen">
            <Navbar /> 
            
            <SideVector className="absolute hidden lg:block -z-20 top-0 right-0"/>

            <CircleShape className="absolute -z-10 hidden lg:block top-0 right-0" />

            <img src="/assets/salad.png" alt="" className="size-[30rem] top-[18%] lg:absolute right-32 drop-shadow-[0_30px_30px_rgb(0_0_0/_0.3)]" />
            
            <div className="lg:absolute  lg:left-20 xl:left-36 top-[36%] text-center lg:text-left flex flex-col items-center lg:items-start gap-12">
                <div className="space-y-3 ">
                    <h1 className="font-normal text-5xl lg:text-4xl 2xl:text-8xl 2xl:w-[700px]">All Delicious <span className="font-bold 2xl:text-7xl">Asian</span></h1>
                    <p className="font-semibold text-xl 2xl:text-3xl">Eggs, Salad, fruits, pasta</p>
                </div>
                <a href="#" className="bg-vert px-9 py-5 rounded-full lg:text-xl text-2xl font-semibold">Find for more</a>
            </div>
        </header>
    )
}


function CircleShape({className}){
    return(
        <svg className={className ? className : ""} width="884" height="900" viewBox="0 0 884 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M442 1.5C685.256 1.5 882.5 202.275 882.5 450C882.5 697.725 685.256 898.5 442 898.5C198.744 898.5 1.5 697.725 1.5 450C1.5 202.275 198.744 1.5 442 1.5Z" stroke="#DAE952" stroke-width="3"/>
        </svg>
    )
}

function SideVector({className}){
    return(
        <svg className={className ? className : ""} width="666" height="900" viewBox="0 0 666 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H666V900H0C0 900 372.434 299 308.901 185C245.368 71 0 0 0 0Z" fill="#DAE952"/>
        </svg>
    )
}

