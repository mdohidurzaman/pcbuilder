import React from "react";

const Ram = ({ rams }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-10">Our Products</h1>
      <section className="grid grid-cols-4 gap-10 mb-32">
        {rams.map((ram) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ram.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{ram.productName}</h2>
              <p>
                <span className="font-bold">Category: </span>
                {ram.category}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {ram.price}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {ram.status}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {ram.rating}
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

export default Ram;
