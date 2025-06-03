// const NavMenuList = () => {
//   return (
//     <div
//       className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
//       id="mobile-menu-2"
//     >
//       <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
//             aria-current="page"
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Company
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Marketplace
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Features
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Team
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default NavMenuList;
const NavMenuList = () => {
  const menuItems = [
    { name: "Home", active: true },
    { name: "Company" },
    { name: "Marketplace" },
    { name: "Features" },
    { name: "Team" },
    { name: "Contact" },
  ];

  const commonClass =
    "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  const activeClass =
    "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white";

  return (
    <div
      className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={item.active ? activeClass : commonClass}
              ariaActive={item.active ? "page" : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenuList;
