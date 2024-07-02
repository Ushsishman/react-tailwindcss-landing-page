import Answer from "./Answer";

const Question = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row pl-6 md:px-20 mt-24">
      <div className="flex flex-col w-full">
        <h3 className="text-4xl text-center md:text-left font-bold text-primary-dark_blue">
          What’s different about <br /> Manage?
        </h3>
        <p className="font-medium text-center md:text-left mt-8 text-neutral-dark_grayish_blue">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our <br /> software is tailor-made for modern digital{" "}
          <br /> product teams.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col md:w-2/3">
        <Answer
          number="01"
          header="Track company-wide progress"
          text={
            <>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </>
          }
        />
        <br />
        <br />
        <Answer
          number="02"
          header="Advanced built-in reports"
          text={
            <>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </>
          }
        />
        <br />
        <br />
        <Answer
          number="03"
          header="Everything you need in one place"
          text={
            <>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </>
          }
        />
      </div>
    </div>
  );
};

export default Question;
