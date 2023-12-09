import React from "react";
import PropTypes from "prop-types";

const Button = ({btntext}) => {
  return (
    <div>
          <button className="text-base text-white bg-indigo-600 hover:bg-indigo-700
        py-2.5 px-5 font-semibold rounded-md text-center">
            {btntext}
        </button>
    </div>
  );
};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
};

export default Button;
