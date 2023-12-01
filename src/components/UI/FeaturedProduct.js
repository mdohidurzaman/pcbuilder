import Link from "next/link";
import React from "react";

const FeaturedProduct = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold pb-10">
        Featured Products
      </h1>

      <section className="grid grid-cols-4 gap-10 mb-32">
        <Link href={"/category/processor"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://www.cloud.ryanscomputers.com/cdn/products/main/bundle-with-pc-intel-10th-gen-comet-lake-core-11624449239.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Intel 10th Gen Comet Lake Core i5.</h2>
              <p>
                <span className="font-bold">Category: </span>
                Processor
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/monitor"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="" alt="Shoes" className="rounded-xl" />0
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Title</h2>
              <p>
                <span className="font-bold">Category: </span>
                Monitor
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/motherboard"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://www.ryanscomputers.com/storage/products/main/gigabyte-ga-j1800m-d3p-built-in-241ghz-ddr3-11548643979.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Gigabyte GA-J1800M-D3P Built In 2.41GHz DDR3 Celeron
                Processor+Motherboard (Combo)
              </h2>
              <p>
                <span className="font-bold">Category: </span>
                Motherboard
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/ram"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="" alt="Shoes" className="rounded-xl" />0
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Title</h2>
              <p>
                <span className="font-bold">Category: </span>
                Ram
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/ups"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="" alt="Shoes" className="rounded-xl" />0
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Title</h2>
              <p>
                <span className="font-bold">Category: </span>
                UPS
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/storage"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="" alt="Shoes" className="rounded-xl" />0
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Title</h2>
              <p>
                <span className="font-bold">Category: </span>
                Storage
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/category/others"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="" alt="Shoes" className="rounded-xl" />0
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Title</h2>
              <p>
                <span className="font-bold">Category: </span>
                Others
              </p>
              <p>
                <span className="font-bold">Price: </span>
                5500
              </p>
              <p>
                <span className="font-bold">Status: </span>
                In Stock
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                4.5
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Find This Category</button>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default FeaturedProduct;
