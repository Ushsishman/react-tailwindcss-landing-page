const Answer = ({ number, header, text }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center">
        <div className="bg-neutral-very_pale_red md:bg-transparent">
          <p className="bg-primary-bright_red text-neutral-very_pale_red font-medium text-lg py-1.5 px-6 mr-6 md:mr-3 rounded-full">
            {number}
          </p>
        </div>
        <div className="w-full">
          <h5 className="text-primary-dark_blue text-lg font-bold bg-neutral-very_pale_red md:bg-transparent py-1.5">
            {header}
          </h5>
        </div>
      </div>
      <div>
        <p className="font-medium text-neutral-dark_grayish_blue mt-3">{text}</p>
      </div>
    </div>
  );
};

export default Answer;
