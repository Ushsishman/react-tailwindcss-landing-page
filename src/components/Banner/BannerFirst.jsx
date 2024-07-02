import RedButton from "../Buttons/RedButton";

const BannerFirst = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-5xl text-center md:text-left mt-4 md:mt-0 text-primary-dark_blue font-bold">
        Bring everyone <br /> together to build <br /> better products.
      </h1>
      <p className="my-10 text-center md:text-left text-neutral-dark_grayish_blue font-medium">
        Manage makes it simple for software teams <br /> to plan day-to-day
        tasks while keeping the <br /> larger team goals in view.
      </p>
      <RedButton />
    </div>
  );
};

export default BannerFirst;
