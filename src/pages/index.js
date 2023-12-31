import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedProduct from "@/components/UI/FeaturedProduct";
import AllCategories from "@/components/UI/AllCategories";
import React from "react";

const Home = ({ tools }) => {
  return (
    <>
      <Banner />
      <AllCategories tools={tools} />
      <FeaturedProduct />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Static Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/processors");
  const data = await res.json();

  return {
    props: {
      tools: data,
    },
    revalidate: 10,
  };
};
