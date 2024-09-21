import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import PageHeader from "./PageHeader";
import { formConfig, HEADER_CONTENT } from "@/data";
import DynamicForm from "./form/DynamicForm";

const { content, email, footerDescription } = HEADER_CONTENT;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    if (submitting) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-key": process.env.DATA_API_KEY,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      } else {
        setSubmitSuccess(false);
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitSuccess(false);
      setError("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-4 text-[#4F4F4F] text-center max-w-5xl mx-auto">
      <PageHeader
        title="Contact me"
        content={content}
        email={email}
        footerDescription={footerDescription}
      >
        <SocialLinks />
      </PageHeader>
      <div className=" font-poppins  bg-white max-w-[992px] mx-auto mb-4 p-2 lg:p-4 rounded-lg shadow-md w-full">
        <h2 className="text-3xl font-bold text-[#4F4F4F] text-center my-2">
          Get In Touch
        </h2>
        {submitSuccess && (
          <div className="text-2xl font-bold mb-6 text-green-600">
            Thank you! for your apprication.
          </div>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <DynamicForm
          config={formConfig}
          onSubmit={handleSubmit}
          loading={submitting}
          submitText="Send Now"
        />
      </div>
    </div>
  );
};

export default Contact;
