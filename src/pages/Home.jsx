import { useLoaderData } from "react-router-dom";
import Banner from "../component/Home/Banner";
import Fruits from "../component/Home/Fruits";
import Gallery from "../component/Home/Gallery";
const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner />
      <Fruits data={data} />
      <Gallery />
    </>
  );
};

export default Home;
