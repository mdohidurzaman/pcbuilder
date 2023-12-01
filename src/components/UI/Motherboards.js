import React from "react";

const Motherboards = ({ motherboards }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-10">Our Products</h1>
      <section className="grid grid-cols-4 gap-10 mb-32">
        {motherboards.map((motherboard) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={motherboard.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{motherboard.productName}</h2>
              <p>
                <span className="font-bold">Category: </span>
                {motherboard.category}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {motherboard.price}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {motherboard.status}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {motherboard.rating}
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Motherboards;
