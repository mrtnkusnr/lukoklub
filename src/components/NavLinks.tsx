import { Link } from "react-router-dom";

const NavLinks = () => {
  const sections = [
    { title: "Domov", route: "/" },
    { title: "Tréningy", route: "/treningy" },
    { title: "Prihláška", route: "/prihlaska" },
    { title: "Galéria", route: "/galeria" },
    { title: "Kontakt", route: "/kontakt" },
  ];
  return (
    <ul className="justify-between gap-12 sm:flex sm:flex-row text-center">
      {sections.map((section) => (
        <li
          key={section.title}
          className=" hover:text-orange-500 relative group mt-6 sm:mt-0"
        >
          <Link to={section.route}>{section.title}</Link>
          <span className="sm:absolute sm:-bottom-1 sm:left-1/2 sm:w-0 sm:transition-all sm:h-0.5 sm:bg-orange-500 sm:group-hover:w-3/6"></span>
          <span className="sm:absolute sm:-bottom-1 sm:right-1/2 sm:w-0 sm:transition-all sm:h-0.5 sm:bg-orange-500 sm:group-hover:w-3/6"></span>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
