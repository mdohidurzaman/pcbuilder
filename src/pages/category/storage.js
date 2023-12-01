import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import Storages from "@/components/UI/Storages";

const Storage = ({ storages }) => {
  return (
    <>
      <Banner />
      <Storages storages={storages} />
    </>
  );
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//SSG => Statics Site Generation

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/storages");
  const data = await res.json();

  return {
    props: {
      storages: data,
    },
    revalidate: 10,
  };
};
