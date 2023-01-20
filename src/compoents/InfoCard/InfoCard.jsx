import { getInfoIcon } from "../../utils";
export const InfoCard = ({ infoCard }) => {
  const { icon, total, title, warning } = infoCard;
  return (
    <div
      className={`shadow-card p-3 flex flex-col items-center justify-between rounded-sm ${
        warning === "true" ? "bg-rose-400" : "bg-inherit"
      } }`}>
      {getInfoIcon(icon)}
      <span
        className={`text-center text-[3rem] font-bold leading-none pb-2 ${
          warning === "true" ? "text-white" : "text-inherit"
        }`}>
        {total}
      </span>
      <span
        className={`text-center text-sm ${
          warning === "true" ? "text-white" : "text-inherit"
        }`}>
        {title}
      </span>
    </div>
  );
};
