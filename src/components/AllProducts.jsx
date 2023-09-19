import PopularProductCard from "../components/PopularProductCard";
import { fullProducts } from "../constants";

const AllProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 padding">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">All 
        <span className="text-light-coral"> Romance</span> Books</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray-200">Discover the hottest reads that BookTok can't stop talking about! Browse our full collection of carefully handpicked trending reads.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {fullProducts.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default AllProducts