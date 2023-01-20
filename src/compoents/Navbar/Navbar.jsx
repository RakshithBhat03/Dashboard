import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { ProfileIcon } from "..";
export const Navbar = () => {
  return (
    <nav className="flex h-16 bg-bgNavbar mx-6 text-white flex items-center justify-between">
      <h2 className="text-2xl first-letter:text-turquoiseBlue tracking-[0.3em] font-bold ml-12 hover:cursor-pointer">
        HOURS
      </h2>
      <ul className="flex gap-8">
        <li className="hover:cursor-pointer underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Dashboard
        </li>
        <li className="hover:cursor-pointer hover:underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Projects
        </li>
        <li className="hover:cursor-pointer hover:underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Team
        </li>
        <li className="hover:cursor-pointer hover:underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Clients
        </li>
        <li className="hover:cursor-pointer hover:underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Time
        </li>
        <li className="hover:cursor-pointer hover:underline decoration-turquoiseBlue text-sm font-light underline-offset-4">
          Reports
        </li>
      </ul>
      <div className="flex gap-2 mr-12 items-center">
        <div className="relative mr-4">
          <NotificationsNoneOutlinedIcon className="hover:cursor-pointer font-light" />
          <span className="absolute top-1.5 right-1 bg-rose-600 h-1.5 w-1.5 rounded-full"></span>
        </div>
        <ProfileIcon />
        <p className="text-sm font-light hover:cursor-pointer">John</p>
        <KeyboardArrowDownOutlinedIcon className="hover:cursor-pointer font-light" />
      </div>
    </nav>
  );
};
