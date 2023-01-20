import { PROFILE_URL } from "../../constants/constants";
export const ProfileIcon = ({ iconUrl = PROFILE_URL }) => {
  return (
    <figure className="w-10 h-10 hover:cursor-pointer">
      <img src={iconUrl} alt="profile" className="w-full h-full rounded-full" />
    </figure>
  );
};
