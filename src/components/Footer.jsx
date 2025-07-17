import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

export default function Footer(){
    return(
        <footer className="lg:px-32 px-4 py-20 gap-32 flex flex-col items-center font-poppins">
            <div className="lg:w-[90%] lg:h-[30rem] bg-newsletter bg-cover bg-no-repeat rounded-3xl flex flex-col justify-center gap-8 p-6 lg:p-8">
                <h2 className="font-semibold text-2xl lg:text-6xl text-center text-white">Get our promo code to subscribe our page and channel of food </h2>
                <form className="relative overflow-hidden lg:w-[85%] mx-auto">
                    <input className="rounded-lg lg:rounded-2xl outline-none placeholder:text-xs lg:placeholder:text-2xl lg:placeholder:font-normal p-4 lg:py-10 w-full h-full" type="email" name="email" placeholder="Type your email and get "/>
                    <button className="bg-vert lg:py-7 py-3 px-3 lg:px-24 lg:text-3xl absolute right-1 lg:right-2 top-1/2 text-white rounded-lg lg:rounded-2xl -translate-y-1/2" type="submit">Subscribe</button>
                </form>
            </div>


            <div className="flex flex-col gap-14 lg:flex-row justify-around items-center w-full text-lg text-[#00000080]">
                <div className="flex flex-col items-center space-y-6">
                    <a href="#" className="flex gap-3">
                        <img src="/assets/logo.png" alt="Restaurant Logo" />
                        <p className="self-center font-bold text-black text-lg">Dhabi Restaurant</p>
                    </a>
                    <p className="text-center w-80">
                        Managing restaurant menus and other information including location and opening hours. Managing the preparation of orders at a restaurant kitchen.
                    </p>
                </div>

                <nav className="lg:flex grid grid-cols-2 lg:flex-row gap-16">
                    <div className="text-center space-y-6">
                        <h3 className="font-bold text-black">Navigation</h3>
                        <div className="flex flex-col">
                            <a href="#">Menu</a>
                            <a href="#">products</a>
                            <a href="#">Abouts</a>
                            <a href="#">Dish</a>
                            <a href="#">Asian</a>
                        </div>
                    </div>
                    <div className="text-center space-y-6">
                        <h3 className="font-bold text-black">Genre</h3>
                        <div className="flex flex-col">
                            <a href="#">Salad</a>
                            <a href="#">Spicy</a>
                            <a href="#">Bowl</a>
                            <a href="#">Kitchen</a>
                            <a href="#">Home</a>
                        </div>
                    </div>
                    <div className="text-center flex flex-col items-center space-y-6">
                        <h3 className="font-bold text-black">Follow</h3>
                        <div>
                            <a href="#"><CiFacebook className="size-10 font-bold" /></a>
                            <a href="#"><CiTwitter className="size-10 font-bold" /></a>
                            <a href="#"><CiInstagram className="size-10 font-bold" /></a>
                        </div>
                    </div>
                    
                </nav>
            </div>
        </footer>
    )
}