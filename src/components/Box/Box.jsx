const Box = ({ className, src, text, name }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-neutral-very_pale_red p-6 rounded-lg h-full ${className}`}>
      <img src={src} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h4 className="text-primary-dark_blue text-base font-bold text-center">
        {name}
      </h4>
      <p className="text-neutral-dark_grayish_blue font-medium text-sm text-center my-3">
        {text}
      </p>
    </div>
  );
};

export default Box;
