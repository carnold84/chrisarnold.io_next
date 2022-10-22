import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface Props {
  element?: "a" | "navLink";
  label: string;
  to: string;
}

const MainMenuItem = ({ element = "navLink", label, to }: Props) => {
  return element === "navLink" ? (
    <NavLink end={true} to={to}>
      {({ isActive }) => (
        <span
          className={classNames(
            "border-b-2 py-1 font-display text-sm font-normal text-text-300 hover:text-text-500",
            {
              "border-transparent": !isActive,
              "border-neutral-400": isActive,
            }
          )}
        >
          {label}.
        </span>
      )}
    </NavLink>
  ) : (
    <a href={to}>
      <span className="py-1 font-display text-sm font-normal text-text-300 hover:text-text-500">
        {label}.
      </span>
    </a>
  );
};

export default MainMenuItem;