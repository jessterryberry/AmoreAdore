import Button from "../components/Button";
import { book10 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section 
      id="about-us" 
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Indulge in Unforgettable Love Stories,
          <span className='text-light-coral'> Handpicked </span> for You
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Experience unparalleled customer service and a treasure trove of romance novels at Amore Adore. Our dedicated team goes the 
          extra mile to ensure your shopping experience is seamless, offering personalized recommendations and swift responses to any inquiries. 
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          With an extensive collection of handpicked titles, from timeless classics to hidden gems, 
          you're bound to find the perfect love story that captivates your heart.
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={book10}
          alt="book10"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality