import WhiteButton from "../Buttons/WhiteButton";
import bg_tablet from "../../assets/bg-tablet-pattern.svg";

const Commercial = () => {
  return (
    <div className="bg-primary-bright_red h-64 md:h-52 flex flex-col md:flex-row items-center justify-center md:justify-between px-20">
      <h3 className="text-4xl font-bold text-neutral-very_light_gray relative z-10 text-center mb-7 md:mb-0">
        Simplify how your team works today.
      </h3>
      <WhiteButton />
      <img
        src={bg_tablet}
        className="w-96 absolute transform right-0 translate-x-56 -translate-y-40 opacity-10"
      />
      <img
        src={bg_tablet}
        className="w-96 absolute transform left-0 md:translate-x-40 translate-y-20 opacity-10"
      />
    </div>
  );
};

export default Commercial;
