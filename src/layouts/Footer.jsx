import whitelogo from "../assets/whitelogo.svg";
import facebook from "../assets/icon-facebook.svg";
import yt from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-neutral-very_dark_blue h-full md:h-48 w-full relative z-0 px-20 py-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between">
      <div className="h-full flex flex-col-reverse md:flex-col items-center md:items-start justify-between">
        <div>
          <img className="cursor-pointer my-10 md:mt-0" src={whitelogo} />
        </div>
        <ul className="flex flex-row">
          <li className="mx-1.5 cursor-pointer">
            <img src={facebook} className="h-8 mx-2.5 md:h-8 md:mx-0" />
          </li>
          <li className="mx-1.5 cursor-pointer">
            <img src={yt} className="h-8 mx-2.5 md:h-8 md:mx-0" />
          </li>
          <li className="mx-1.5 cursor-pointer">
            <img src={twitter} className="h-8 mx-2.5 md:h-8 md:mx-0" />
          </li>
          <li className="mx-1.5 cursor-pointer">
            <img src={pinterest} className="h-8 mx-2.5 md:h-8 md:mx-0" />
          </li>
          <li className="mx-1.5 cursor-pointer">
            <img src={instagram} className="h-8 mx-2.5 md:h-8 md:mx-0" />
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-between w-full px-6 md:px-0 mb-8 md:mb-0 md:w-1/3">
        <ul className="text-neutral-very_pale_red flex flex-col">
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Home
          </li>
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Pricing
          </li>
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Products
          </li>
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            About Us
          </li>
        </ul>
        <ul className="text-neutral-very_pale_red flex flex-col">
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Careers
          </li>
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Community
          </li>
          <li className="my-1 text-sm cursor-pointer hover:text-primary-bright_red duration-100">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="mb-8 md:mb-0 flex flex-row">
          <input
            className="py-3 px-8 md:px-4 rounded-full text-xs"
            placeholder="Updates in your inbox..."
          />
          <button className="py-3 px-5 ml-2 bg-primary-bright_red text-neutral-very_pale_red rounded-full text-xs font-medium hover:bg-[#f5a18c] duration-100">
            Go
          </button>
        </div>
        <p className="text-xs text-neutral-dark_grayish_blue md:text-right absolute right-1/4 bottom-5 md:bottom-10 md:right-20">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
