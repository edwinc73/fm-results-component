import PropTypes from "prop-types";

import { cx } from "../utils/cs.ts";

function SummaryItem({ data }) {
  const { category, icon, score, bgColor, textColor } = data;

  return (
    <div
      className={`flex justify-between font-hanken text-base p-3 ${bgColor} bg-opacity-5 rounded-lg `}
    >
      <div className="summaryItem__title flex gap-3">
        <img src={icon} alt={category} className="w-5 h-5" />
        <span className={cx(" text font-medium ", textColor)}>{category}</span>
      </div>
      <div className="summaryItem__score flex gap-1 items-baseline">
        <span className="font-bold mr-1 text-dark-blue">{score}</span>
        <span className="opacity-70 font-medium">/</span>
        <span className="opacity-70 font-medium ">100</span>
      </div>
    </div>
  );
}

export default SummaryItem;

SummaryItem.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
