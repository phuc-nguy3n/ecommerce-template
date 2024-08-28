import HeaderTop from "./HeaderTop";

import "./styles.css";
import HeaderBody from "./HeaderBody";
import HeaderFooter from "./HeaderFooter";

const Header = () => {
  return (
    <header className="bg-[--top-header-light]  dark:bg-[--top-header-dark]">
      <HeaderTop />

      <HeaderBody />

      <HeaderFooter />
    </header>
  );
};

export default Header;
