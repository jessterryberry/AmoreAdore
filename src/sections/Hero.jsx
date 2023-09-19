import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { books, statistics } from "../constants";
import { bigBook1 } from "../assets/images";
import BookCard from "../components/BookCard";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [bigBookImg, setBigBookImg] = useState(bigBook1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-light-coral font-bo">Sizzling Summer Reads</p>
        <h1 className="mt-10 font-palanquin text-[84px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-seasalt xl:whitespace-nowrap relative z-10 pr-10">Hot New Arrivals</span>
          <br />
          <span className="text-light-coral inline-block mt-3">Romance</span> Books
        </h1>
        <p className="font-montserrat text-slate-gray-200 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Indulge in captivating tales of love and passion with our latest arrivals in the world of romance - find your next heart-fluttering read today!</p>
        <Link to="/all-products">
          <Button
            label="Shop Now"
            iconURL={arrowRight}
          />
        </Link>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-light-coral bg-hero bg-cover bg-center">
        <img
          src={bigBookImg}
          alt="Book collection"
          width={405}
          height={350}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] ml-16 sm:left-[10%] max-sm:px-6">
          {books.map((Book, index) => (
            <div key={index}>
              <BookCard
                imgURL={Book}
                changeBigBookImage={(Book) => setBigBookImg(Book)}
                bigBookImg={bigBookImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero