const MenuModal = ({ setModalOpen }) => {
  return (
    <div className="min-h-full w-full absolute z-30">
      <div className="h-52 w-64 bg-neutral-very_light_gray fixed z-10 top-28 left-1/2 transform -translate-x-1/2">
        <ul className="h-full text-primary-dark_blue font-bold text-sm flex flex-col items-center justify-center">
          <li className="my-1.5 cursor-pointer">Pricing</li>
          <li className="my-1.5 cursor-pointer">Product</li>
          <li className="my-1.5 cursor-pointer">About Us</li>
          <li className="my-1.5 cursor-pointer">Careers</li>
          <li className="my-1.5 cursor-pointer">Community</li>
        </ul>
      </div>
      <div
        className="bg-gradient-to-t from-black/50 w-full h-screen absolute"
        onClick={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MenuModal;
