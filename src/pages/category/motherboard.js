import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Motherboards from "@/components/UI/Motherboards";

const Motherboard = ({ motherboards }) => {
  return (
    <>
      <Banner />
      <Motherboards motherboards={motherboards} />
    </>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/motherboards");
  const data = await res.json();

  return {
    props: {
      motherboards: data,
    },
    revalidate: 10,
  };
};
