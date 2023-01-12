import { FC } from "react";

export const UserItem: FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="p-2 m-1 border-[1px] rounded-2xl border-slate-400 inline-block hover: cursor-pointer">
      <p className="text-slate-700 font-normal">{userName}</p>
    </div>
  );
};
