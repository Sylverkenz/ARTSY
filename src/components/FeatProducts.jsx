import { useProductContext } from "../contexts/Productcontext";
import { Link } from "react-router-dom";

function FeatProducts() {
  const { products } = useProductContext();
  return (
    <div className="px-6 mdl:px-[10rem] py-[10rem] mdl:py-[6rem]">
      <h2 className="font-Satoshi text-[3rem] mdl:text-[4.2rem] font-bold mdl:font-medium mb-[3.5rem] capitalize">
        featured products
      </h2>
      <article>
        {products.slice(4, 7).map((product, index) => {
          const { id, name, description, url } = product;
          return (
            <div
              key={index}
              className={
                index === 1
                  ? "flex flex-col sm:flex-row-reverse    justify-between border-t py-[5rem]"
                  : "flex  flex-col sm:flex-row justify-between border-t py-[5rem]"
              }
            >
              <div className="group relative sm:w-[45%] duration-500">
                <img
                  src={url}
                  alt={name}
                  className="w-[100%] h-[25rem] object-cover "
                />
                <div className="prodlink">
                  <Link className="block" to={`/market/${id}`}>
                    view product
                    <span className=" ml-12 border w-24 h-24 rounded-full inline-grid place-items-center">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
              <div className="desc sm:w-[50%]">
                <h5 className="font-STIX font-bold text-[2.5rem] sm:text-[3.5rem] mb-[0rem] sm:mb-[3.5rem] capitalize">
                  {name}
                </h5>
                <p className="basetext capitalize">{description}</p>
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
}

export default FeatProducts;
