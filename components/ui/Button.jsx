import Link from "next/link";
import React from "react";

const LinkButton = ({href,content}) => {
  return <Link  href={href} className="link_button">{content}</Link>;
};

const SubmitButton = ({submitting}) => {
  return (
    <button
      type="submit"
      className="submit-button"
    >
      {submitting ? "Submitting..." : "Send Message"}
    </button>
  );
};

export {LinkButton,SubmitButton} ;
