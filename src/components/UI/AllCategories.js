import Link from "next/link";
import React from "react";

const Processsor = ({ tools }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-10">Our Products</h1>
      <section className="grid grid-cols-4 gap-10 mb-32">
        {tools.slice(0, 8).map((tool) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={tool.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tool.productName}</h2>
              <p>
                <span className="font-bold">Category: </span>
                {tool.category}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {tool.price}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {tool.status}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {tool.rating}
              </p>
              <Link href={`/products/${tool.id}`}>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Processsor;
