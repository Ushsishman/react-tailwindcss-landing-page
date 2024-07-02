import BannerFirst from "./BannerFirst";
import BannerSecond from "./BannerSecond";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center md:mt-16 px-20">
      <BannerFirst />
      <BannerSecond />
    </div>
  );
};

export default Banner;
