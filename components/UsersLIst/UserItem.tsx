import Link from "next/link";
import { FC } from "react";
import { IUser } from "../../pageInterfaces/IndexPageProps";

export const UserItem: FC<IUser> = (user) => {
  return (
    <div className="p-2 m-1 border-[1px] rounded-2xl border-slate-400 inline-block shadow-md hover:shadow-none hover:cursor-pointer">
      <Link
        href={`/users/${user.id}`}
        className="text-slate-700 font-normal"
      >
        {user.name}
      </Link>
    </div>
  );
};
