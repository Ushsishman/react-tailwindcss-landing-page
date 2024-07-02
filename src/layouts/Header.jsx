import Logo from "../components/Header/Logo";
import List from "../components/Header/List";
import RedButton from "../components/Buttons/RedButton";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

const Header = ({ setModalOpen, modalOpen }) => {
  return (
    <div className="h-32 px-8 md:px-20 flex items-center justify-between">
      <Logo />
      {modalOpen == false ? (
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setModalOpen(true)}>
            <img src={hamburgerIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="md:hidden absolute right-7 top-12 z-30">
          <button onClick={() => setModalOpen(false)}>
            <img src={closeIcon} alt="close button" />
          </button>
        </div>
      )}
      <div className="hidden md:flex">
        <List />
      </div>

      <div className="hidden md:block">
        <RedButton />
      </div>
    </div>
  );
};

export default Header;
