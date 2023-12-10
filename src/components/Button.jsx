import React from "react";
import PropTypes from "prop-types";

const Button = ({btntext, type}) => {
  return (
    <div>
          <button type="type"
          className="text-base text-white bg-indigo-600 hover:bg-indigo-700
        py-2 px-4 font-semibold rounded-md text-center">
            {btntext}
        </button>
    </div>
  );
};

Button.propTypes = {
    btntext: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Button;
