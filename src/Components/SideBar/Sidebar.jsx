import { NavLink } from "react-router-dom";
import "./styles.scss";

const Sidebar = () => {
  const chapters = [
    { name: "Chapter 1", path: "/chapter-1" },
    { name: "Chapter 2", path: "/chapter-2" },
    { name: "Chapter 3", path: "/chapter-3" },
  ];

  return (
    <div className="sidebarContainer">
      <h2 className="sidebar-title">Menu</h2>
      <nav>
        <ul>
          {chapters.map((chapter) => (
            <li key={chapter.path}>
              <NavLink
                to={chapter.path}
                className={({ isActive }) =>
                  isActive ? "active" : undefined
                }
              >
                {chapter.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
