import { useState } from "react";

export const ToggleButton = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex gap-1 items-center">
      <span
        className={`text-sm font-light ${
          checked ? "text-slate-400" : "text-black"
        }`}>
        Profitability
      </span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          checked={checked}
          onChange={() => setChecked((check) => !check)}
        />
        <div class="w-11 h-6  bg-gray-200 rounded-full dark:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-200"></div>
      </label>
      <span
        className={`text-sm font-light ${
          checked ? "text-black" : "text-slate-400"
        }`}>
        Status
      </span>
    </div>
  );
};
