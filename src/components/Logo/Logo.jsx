import logo from "../../assets/logo.svg";

const Logo = ({
  className = "h-6 mr-3 sm:h-9",
  alt = "Landwind Logo",
  text = "Learn with Sumit",
  textClassName = "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
  href = "#",
}) => {
  return (
    <a href={href} className="flex items-center">
      <img src={logo} alt={alt} className={className} />
      <span className={textClassName}>{text}</span>
    </a>
  );
};

export default Logo;
