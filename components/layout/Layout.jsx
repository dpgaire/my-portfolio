import Navbar from "../Navbar";
import Navbars from "../Navbars";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      <main className="font-poppins flex-1 min-w-0 pl-64  overflow-auto bg-[#FAFAFA] px-2">{children}</main>
    </>
  );
};

export default Layout;
