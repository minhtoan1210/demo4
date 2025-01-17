import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

interface Props {
  children?: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
