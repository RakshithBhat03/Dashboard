import data from "../../data/data.json";
import { MemberMood } from "..";
export const TeamMood = () => {
  const { users } = data;
  return (
    <div className="row-span-4 shadow-card flex flex-col px-2 py-4 gap-2 justify-evenly">
      <h2 className="text-sm">Team mood</h2>
      {users.map((user) => (
        <MemberMood key={user.id} user={user} />
      ))}
    </div>
  );
};
