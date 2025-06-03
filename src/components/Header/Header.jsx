import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import NavMenuList from "./NavMenuList";
const Header = () => {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo />
          <div className="flex items-center lg:order-2">
            <a href="#" target="_blank">
              
<Button className="px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">
  Download
</Button>
            </a>
          </div>

          <NavMenuList />
        </div>
      </nav>
    </header>
  );
};

export default Header;
