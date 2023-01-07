import { FC } from "react";

export const TopUserItem: FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="p-2 m-1 border-[1px] border-slate-400 inline-block">
      <p className="text-slate-700 font-normal">{userName}</p>
    </div>
  );
};
