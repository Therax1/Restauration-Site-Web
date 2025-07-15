import FeedbackCard from "./FeedbackCard";
import {userFeedback} from "../datas/datas"

export default function Feedback(){
    return(
        <section className="px-32 py-16 space-y-32 bg-[#dae95233]">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-5xl text-center w-[45rem] font-semibold">Our <span className="text-vert font-bold">Dhabi</span> Restaurant Happy Customers</h1>
                <p className="text-xl text-center">A customer is a person or business that buys goods or services from another business. Customers are crucial because they generate revenue. Without them, businesses would go out of business.</p>
            </div>

            <div className="flex gap-24">
                {
                    userFeedback.map((user)=>(
                        <FeedbackCard 
                            userProfil={user.src}
                            altUser={user.alt}
                            userMessage={user.message}
                            userFullname={user.userName}
                        />
                    ))
                }
            </div>
        </section>
    )
}