import { ProfileIcon } from "../";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
export const BudgetCard = ({ budget }) => {
  const {
    name,
    company,
    totalBudget,
    isProfitable,
    profit,
    actualHours,
    soldHours,
    progress,
    progressColor,
    isOverBudget,
    overBudgetHours,
  } = budget;
  const backgroundVariants = {
    rose: "bg-rose-300",
    teal: "bg-jaggedIce",
    geebung: "bg-geebung-200",
  };
  const progressVariants = {
    rose: "bg-rose-600",
    teal: "bg-teal-700",
    geebung: "bg-geebung-600",
  };
  const totalProgress = {
    full: "w-full",
    "1/2": "w-1/2",
  };
  return (
    <div className="shadow-card h-52 rounded-sm flex flex-col p-4 gap-4 justify-between">
      <div className="flex w-full justify-between items-center">
        <header>
          <h1 className="text-xl font-semibold">{name}</h1>
          <h2 className="text-sm font-light text-slate-400">{company}</h2>
        </header>
        <ProfileIcon />
      </div>
      <div className="flex flex-col text-sm font-extralight text-slate-400 gap-1 w-3/5">
        <div className="flex justify-between gap-1">
          <span>Total Budget</span>
          <span className="text-black">{totalBudget}</span>
        </div>
        <div className="flex justify-between gap-1">
          <span>{`Profitability (100%)`}</span>
          <span
            className={`${
              isProfitable === "true"
                ? "text-black"
                : "text-rose-600 font-semibold"
            }`}>
            {profit}
          </span>
        </div>
      </div>
      <div className="relative">
        <div
          className={`h-4 ${backgroundVariants[progressColor]} rounded-lg relative overflow-hidden`}>
          <div
            className={` ${totalProgress[progress]} h-full ${progressVariants[progressColor]}`}></div>
        </div>
        {progress === "full" && isOverBudget === "true" && (
          <div className={`absolute -top-8 right-0`}>
            <WarningAmberOutlinedIcon className={`text-rose-300`} />
          </div>
        )}
        {progress === "full" && isOverBudget === "false" && (
          <div className={`absolute -top-8 right-0`}>
            <TaskAltOutlinedIcon className={`text-teal-600`} />
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <span className="text-xs">Actual hours: {actualHours}</span>
        {isOverBudget === "true" ? (
          <span className="text-xs text-rose-600 font-bold">
            {overBudgetHours} hours over Budget!
          </span>
        ) : (
          <span className="text-xs">{soldHours} sold hours</span>
        )}
      </div>
    </div>
  );
};
