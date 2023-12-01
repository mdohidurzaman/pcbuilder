import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Rams from "@/components/UI/Rams";

const Ram = ({ rams }) => {
  return (
    <>
      <Banner />
      <Rams rams={rams} />
    </>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/rams");
  const data = await res.json();

  return {
    props: {
      rams: data,
    },
    revalidate: 10,
  };
};
