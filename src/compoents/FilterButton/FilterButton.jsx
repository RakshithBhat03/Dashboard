export const FilterButton = ({ Icon, text }) => {
  return (
    <button className="px-2 py-0.5 border-2 rounded-md text-sm text-fountainBlue border-fountainBlue focus:bg-teal focus:text-turquoiseBlue focus:border-teal flex items-center">
      <Icon />
      <span className="ml-1">{text}</span>
    </button>
  );
};
