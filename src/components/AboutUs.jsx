import { aboutUs } from "../constants";
import AboutUsCard from "./AboutUsCard";
import { Jessica } from "../assets/images";

const AboutUs = () => {
    return (
        <div>
            <section className="sm:px-8 px-8 sm:py-12 py-12">
                <div className="max-container">
                    <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold pb-1 py-14'>
                        About
                        <span className='text-light-coral'> AmoreAdore </span>
                    </h2>
                    <p className='mt-4 info-text'>
                        At AmoreAdore, we specialize in romance and fantasy romance literature. Founded by Jessica Terryberry, a passionate book enthusiast
                        with a flair for computer programming, we're dedicated to curating a collection that caters to the hearts of avid readers.
                    </p>
                </div>
            </section>
            <section className="padding-x py-10">
                <div className="max-container flex justify-center flex-wrap gap-9">
                    {aboutUs.map((aboutus) => (
                        <AboutUsCard key={aboutus.label} {...aboutus} />
                    ))}
                </div>
            </section>
            <section className="grid grid-cols-2 gap-4 sm:px-8 px-8 sm:py-12 py-12">
                <div className="max-container">
                    <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">Meet <span className='text-light-coral'> Jessica </span></h2>
                    <ul className='mt-6 lg:max-w-lg info-text list-disc list-outside'>
                        <li>
                            <strong>Hometown:</strong> Welland, ON
                        </li>
                        <li>
                            <strong>Age:</strong> 28
                        </li>
                        <li>
                            <strong>Education:</strong> Ontario College Diploma, Computer Programming, <em>Niagara College</em>
                        </li>
                    </ul>
                    <p className='mt-4 lg:max-w-lg info-text pb-4'>
                        Jessica's journey into the world of books was sparked by her love for storytelling and her background in computer programming. 
                        This unique blend of skills led her to create AmoreAdore, a space where the magic of romance and fantasy intertwine.  
                    </p>
                    <p className='mt-4 lg:max-w-lg info-text pb-4'>
                        When she's not immersed in the world of coding, Jessica indulges in her other passions. An avid reader of romance and fantasy novels, 
                        she takes pride in her extensive book collection. She's also a seasoned video game enthusiast, always on the lookout for new virtual adventures. 
                        Currently, she's on a quest to master the German language, adding yet another layer to her diverse skill set.  
                    </p>
                    <h2 className="font-palanquin capitalize text-2xl lg:max-w-lg font-bold">Fun Facts about Jessica</h2>
                    <ul className='mt-6 lg:max-w-lg info-text pb-4 list-decimal list-outside'>
                        <li>She shares her birthday with none other than the Queen of England.</li>
                        <li>Jessica is the proud owner of four feline companions, each with their own unique personality and quirks.</li>
                        <li>In a previous chapter of her life, she worked as a dental assistant, adding an unexpected twist to her story.</li>  
                    </ul>
                </div>
                <div className="max-container">
                <img
                    src={Jessica}
                    alt="Jessica"
                    width={806}
                    height={700}
                    className="object-contain relative z-10 rounded-full shadow-2xl shadow-slate-400"
                />
                </div>
            </section>
        </div>
    )

}

export default AboutUs