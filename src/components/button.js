import React from 'react';

function Button({ text }) {
  return (
    <button type="button" className="btn btn-primary">{text}</button>
  );
};

export default Button;