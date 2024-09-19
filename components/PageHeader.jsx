const PageHeader = ({ title, content, email, footerDescription, children }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="mt-2 flex flex-col gap-2 ">
        <p>
          {content}{" "}
          <code className="text-blue-800 cursor-pointer underline">
            {email}
          </code>
        </p>
        <p>{footerDescription}</p>
        {children}
      </div>
    </>
  );
};

export default PageHeader;
