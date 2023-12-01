import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Processors from "@/components/UI/Processors";

const Processor = ({ processors }) => {
  return (
    <>
      <Banner />
      <Processors processors={processors} />
    </>
  );
};

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/processors");
  const data = await res.json();

  return {
    props: {
      processors: data,
    },
    revalidate: 10,
  };
};
