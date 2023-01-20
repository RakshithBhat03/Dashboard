import GridViewIcon from "@mui/icons-material/GridView";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
export const getInfoIcon = (icon) => {
  switch (icon) {
    case "GridViewIcon":
      return (
        <GridViewIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-turquoiseBlue"
        />
      );
    case "TaskAltOutlinedIcon":
      return (
        <TaskAltOutlinedIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-turquoiseBlue"
        />
      );
    case "AutorenewOutlinedIcon":
      return (
        <AutorenewOutlinedIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-turquoiseBlue"
        />
      );
    case "WarningAmberOutlinedIcon":
      return (
        <WarningAmberOutlinedIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-rose-600"
        />
      );
    case "PeopleOutlinedIcon":
      return (
        <PeopleOutlinedIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-turquoiseBlue"
        />
      );

    default:
      return (
        <GridViewIcon
          style={{ fontSize: "2rem" }}
          className="mr-auto text-3xl text-turquoiseBlue"
        />
      );
  }
};
