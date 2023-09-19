import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-light-coral'>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Step into a world of passion and page-turning romance at Amore Adore, the 
          ultimate destination for love story enthusiasts. For a limited time, 
          earn double the bonus points with online every purchase.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Whether you're seeking passionate encounters or everlasting love, let our 
          curated collection sweep you off your feet, all while earning rewards to fuel your next romantic escape.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Link to="/all-products">
            <Button label='Shop now' iconURL={arrowRight} />
          </Link>
          <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray-200' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer