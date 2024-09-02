import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="w-full px-10 py-3 bg-dark-blue text-white font-hanken text-center rounded-full text-base font-medium hover:bg-gradient-to-b from-slate-bg to-75% to-blue-bg transition-colors duration-75 ease-in-out ">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
