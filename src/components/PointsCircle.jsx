import PropTypes from "prop-types";

function PointsCircle({ value }) {
  return (
    <div className="font-hanken bg-gradient-to-b from-violet-circle from-25% to-blue-circle text-light-blue w-40 h-40 rounded-full mx-auto flex flex-col justify-center items-center">
      <span className="text-[4rem] font-bold m-0 p-0">{value}</span>
      <span className="opacity-50 text-base mt-[-1rem]">of 100</span>
    </div>
  );
}

PointsCircle.propTypes = {
  value: PropTypes.number,
};
export default PointsCircle;
