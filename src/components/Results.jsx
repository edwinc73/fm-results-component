import PointsCircle from "./PointsCircle";

function Results() {
  return (
    <section
      id="result"
      className="p-10 bg-gradient-to-b from-slate-bg to-75% to-blue-bg flex flex-col items-center rounded-b-[2rem] md:rounded-t-[2rem] gap-6 md:w-1/2"
    >
      <h1 className="text-light-blue font-hanken font-medium text-xl opacity-70">
        Your Result
      </h1>
      <PointsCircle value={76} />
      <div className="results__description text-center max-w-xs font-hanken">
        <div className="results__subtitle text-white text-2xl font-medium mb-2">
          Great
        </div>
        <p className="text-light-blue opacity-70 text-base leading-snug">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}

export default Results;
