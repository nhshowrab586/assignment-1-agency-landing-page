
import SocialIcons from "./SocialsIcon";
import SubFooter1 from "./SubFooter1";
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* <!-- Sub Footer 1 --> */}
        <SubFooter1 />

        {/* <!-- Sub Footer 2 --> */}
        <div class="text-center">
          <a
            href="#"
            class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={logo}
              class="h-6 mr-3 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit{" "}
          </a>
          <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              class="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
