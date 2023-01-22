import Link from "next/link";
import { FC } from "react";
import { IUser } from "../../pageInterfaces/UserPageProps";

export const UserItem: FC<IUser> = (user) => {
  return (
    <div className="p-2 border border-slate-400 rounded-lg inline-block shadow-md hover:shadow-none hover:cursor-pointer">
      <Link
        href={`/users/${user.id}`}
        className="text-slate-700 font-normal"
      >
        {user.name}
      </Link>
    </div>
  );
};
