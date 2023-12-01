import RootLayout from "@/components/Layout/RootLayout";
import Link from "next/link";

const ProductDetails = ({ allData }) => {
  return (
    <>
      <section className="grid grid-cols-4 gap-10 mb-32">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={allData.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{allData.productName}</h2>
            <p>
              <span className="font-bold">Category: </span>
              {allData.category}
            </p>
            <p>
              <span className="font-bold">Price: </span>
              {allData.price}
            </p>
            <p>
              <span className="font-bold">Status: </span>
              {allData.status}
            </p>
            <p>
              <span className="font-bold">Rating: </span>
              {allData.rating}
            </p>
            <Link href={`/processors/${allData.id}`}>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSR => Server Side Rendering
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/processors");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/processors/${params.productId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allData: data,
    },
  };
};
