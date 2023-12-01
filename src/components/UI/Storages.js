import React from "react";

const Storages = ({ storages }) => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-10">Our Products</h1>
      <section className="grid grid-cols-4 gap-10 mb-32">
        {storages.map((storage) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={storage.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{storage.productName}</h2>
              <p>
                <span className="font-bold">Category: </span>
                {storage.category}
              </p>
              <p>
                <span className="font-bold">Price: </span>
                {storage.price}
              </p>
              <p>
                <span className="font-bold">Status: </span>
                {storage.status}
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                {storage.rating}
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

export default Storages;
