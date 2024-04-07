import Link from "next/link";
import React from "react";

const LinkButton = ({href,content}) => {
  return <Link  href={href} className="link_button">{content}</Link>;
};

const SubmitButton = ({ submitting= false , text }) => {
  return (
    <button
      type="submit"
      className="submit-button"
    >
      {submitting ? "Submitting..." : text}
    </button>
  );
};

export {LinkButton,SubmitButton} ;
