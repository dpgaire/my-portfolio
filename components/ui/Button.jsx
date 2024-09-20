import React from "react";

const SubmitButton = ({ submitting = false, text, onClick }) => {
  return (
    <button onClick={onClick} type="submit" className="submit-button">
      {submitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitButton;
