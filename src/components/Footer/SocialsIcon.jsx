import Facebook from "../SVG/Facebook";
import Github from "../SVG/Github";
import InstaGram from "../SVG/InstaGram";
import Of from "../SVG/Of";
import Twitter from "../SVG/Twitter";

const icons = [
  { component: <Facebook />, href: "#" },
  { component: <InstaGram />, href: "#" },
  { component: <Twitter />, href: "#" },
  { component: <Github />, href: "#" },
  { component: <Of />, href: "#" },
];

const SocialIcons = () => {
  return (
    <ul className="flex justify-center mt-5 space-x-5">
      {icons.map((icon, index) => (
        <li key={index}>
          <a href={icon.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            {icon.component}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
