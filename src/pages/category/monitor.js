import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Monitors from "@/components/UI/Monitors";

const Monitor = ({ monitors }) => {
  return (
    <>
      <Banner />
      <Monitors monitors={monitors} />
    </>
  );
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/monitors");
  const data = await res.json();

  return {
    props: {
      monitors: data,
    },
    revalidate: 10,
  };
};
