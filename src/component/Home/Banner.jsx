import "./Banner.css";
const Banner = () => {
  return (
    // <div className="banner  ">
    //   <div className="overlay flex justify-center items-center ">
    //     <div className="w-1/2 text-center">
    //       <h1
    //         className="text-4xl text-white banner-title py-3"
    //         data-aos="fade-right"
    //         data-aos-duration="2000"
    //       >
    //         Auto Parts Online Store
    //       </h1>
    //       <p
    //         className="text-white banner-subTitle pb-5"
    //         data-aos="fade-right"
    //         data-aos-duration="1500"
    //       >
    //         Special offer for auto parts for electric cars and hybrid vehicles.
    //         To select the spare part you need, use the filter presented above or
    //         the advanced filter.
    //       </p>
    //       <button className="btn btn-outline btn-primary"> Get Start</button>
    //     </div>
    //   </div>
    // </div>

    <div className="banner text">
      <div className="overlay  flex justify-center items-center">
        <div className="w-1/2 text-center">
          <h1>100% FRESH & ORGANIC</h1>
          <p className="mb-3">
            Organic and responsibly sourced food is what the modern customer
            demands. These name suggestions have the flexibility to provide you
            with ideas for an organic packaged good product, restaurant, food
            truck other anything else.
          </p>
          <button type="button" className="rounded-md btn btn-outline btn-sm btn-info text-white ">
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
