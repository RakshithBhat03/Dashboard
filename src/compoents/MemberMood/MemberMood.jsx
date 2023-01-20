import { useState } from "react";
import { ProfileIcon } from "..";
import "./MemberMood.css";

export const MemberMood = ({ user }) => {
  const { name, mood, emoji, profile_icon, designation } = user;
  const [value, setValue] = useState(mood);
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div className="flex gap-1 flex-col ">
      <div className="flex gap-2">
        <ProfileIcon iconUrl={profile_icon} />
        <div className="flex flex-col ">
          <span className="text-sm">{name}</span>
          <span className="text-xs text-slate-500">{designation}</span>
        </div>
      </div>
      <label className="block mb-2 text-sm font-medium text-gray-900 mx-2">
        <input
          type="range"
          min="0"
          max="10"
          onChange={handleChange}
          value={value}
          className={`w-full h-0.5 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider ${emoji}`}
        />
      </label>
      <span className="h-0.5 bg-gray-100"></span>
    </div>
  );
};
