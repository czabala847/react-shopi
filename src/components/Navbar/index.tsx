import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

interface ItemsMenu {
  id: number;
  name: string;
  to: string;
  customClassName?: string;
}

const routesLeft: ItemsMenu[] = [
  {
    id: 1,
    name: "Shopi",
    to: "/",
    customClassName: "font-semibold text-lg",
  },
  {
    id: 2,
    name: "All",
    to: "/all",
  },
  {
    id: 3,
    name: "Clothes",
    to: "/clothes",
  },
  {
    id: 4,
    name: "Electronics",
    to: "/electronics",
  },
  {
    id: 5,
    name: "Furnitures",
    to: "/furnitures",
  },
  {
    id: 6,
    name: "Toys",
    to: "/toys",
  },
  {
    id: 7,
    name: "Others",
    to: "/others",
  },
];

const routesRight: ItemsMenu[] = [
  {
    id: 2,
    name: "My orders",
    to: "/my-orders",
  },
  {
    id: 3,
    name: "My Account",
    to: "/my-account",
  },
  {
    id: 4,
    name: "Sing In",
    to: "/sing-in",
  },
];

export const Navbar = () => {
  const { count } = useAppContext();

  return (
    <nav className="flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {routesLeft.map((item) => (
          <li
            key={item.to}
            className={item.customClassName ? item.customClassName : ""}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li>me@carloszabala.com</li>
        {routesRight.map((item) => (
          <li
            key={item.id}
            className={item.customClassName ? item.customClassName : ""}
          >
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to={item.to}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li>🛒 {count}</li>
      </ul>
    </nav>
  );
};
