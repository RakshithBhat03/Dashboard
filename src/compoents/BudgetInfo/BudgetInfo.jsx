import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { FilterButton, BudgetCard } from "../";
import data from "../../data/data.json";
export const BudgetInfo = () => {
  const { budget } = data;
  return (
    <div className="flex flex-col container gap-6">
      <header className="flex gap-4 items-center">
        <h1 className="text-2xl font-semibold">Budget status</h1>
        <FilterButton Icon={AddOutlinedIcon} text="Add New Project" />
        <FilterButton Icon={FileDownloadOutlinedIcon} text="Download report" />
        <FilterButton
          Icon={DateRangeOutlinedIcon}
          text="dd/mm/yyyy - dd/mm/yyyy"
        />
        <FilterButton Icon={MenuOutlinedIcon} text="Filter" />
      </header>
      <div className="grid grid-cols-4 gap-8">
        {budget.map((item) => (
          <BudgetCard key={item.id} budget={item} />
        ))}
      </div>
    </div>
  );
};
