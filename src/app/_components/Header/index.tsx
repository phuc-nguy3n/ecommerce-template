import HeaderTop from "./HeaderTop";

import "./styles.css";
import HeaderBody from "./HeaderBody";
import HeaderFooter from "./HeaderFooter";

const Header = () => {
  return (
    <header className="bg-[#282828] dark:bg-[#EFEFEF]">
      <HeaderTop />

      <HeaderBody />

      <HeaderFooter />
    </header>
  );
};

export default Header;
