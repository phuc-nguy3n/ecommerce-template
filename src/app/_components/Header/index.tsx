import HeaderTop from "./HeaderTop";

import "./styles.css";
import HeaderBody from "./HeaderBody";
import HeaderFooter from "./HeaderFooter";

const Header = () => {
  return (
    <header className="dark:bg-[#282828] bg-[#EFEFEF]">
      <HeaderTop />

      <HeaderBody />

      <HeaderFooter />
    </header>
  );
};

export default Header;
