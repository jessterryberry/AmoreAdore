import { book10 } from "../assets/images";
import { aboutUs } from "../constants";
import AboutUsCard from "./AboutUsCard";

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
            <section className="sm:px-8 px-8 sm:py-12 py-12">
                <div className="max-container">
                <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">Meet <span className='text-light-coral'> Jessica </span></h2>
                <ul className='mt-6 lg:max-w-lg info-text'>
                    <li>
                        Hometown: Welland, ON
                    </li>
                    <li>
                        Age: 28
                    </li>
                    <li>
                        Education: Ontario College Diploma, Computer Programming, <em>Niagara College</em>
                    </li>
                </ul>
                </div>
            </section>
        </div>
    )

}

export default AboutUs