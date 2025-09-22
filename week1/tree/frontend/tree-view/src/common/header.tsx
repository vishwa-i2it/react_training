import { ProfileIcon } from "../components/ui/icon";
import { Logo } from "../components/ui/logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
      </div>

      <div className="header-center">
        <a href="/" className="nav-link">
          Home
        </a>
      </div>

      <div className="header-right">
        <ProfileIcon />
      </div>
    </header>
  );
};

export default Header;
