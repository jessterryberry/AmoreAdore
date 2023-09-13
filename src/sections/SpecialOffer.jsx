import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Treat yourself to a romantic escape with our special offers. Amore Adore rewards you
          with <strong>2x bonus points</strong> when you buy online, so you can save more and read more.
          Browse our wide range of genres, from historical to paranormal, and find your perfect match.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Amore Adore is the ultimate destination for romance lovers. Your journey with us is
          where romance comes alive.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer