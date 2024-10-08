import Navbars from "../Navbars";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      <main className="font-poppins flex-1 min-w-0 lg:pl-64  overflow-auto bg-[#FAFAFA]">
        {children}
      </main>
    </>
  );
};

export default Layout;
