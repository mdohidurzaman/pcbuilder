import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import UPS from "@/components/UI/UPS";

const Ups = ({ upses }) => {
  return (
    <>
      <Banner />
      <UPS upses={upses} />
    </>
  );
};

export default Ups;

Ups.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/UPS");
  const data = await res.json();

  return {
    props: {
      upses: data,
    },
    revalidate: 10,
  };
};
