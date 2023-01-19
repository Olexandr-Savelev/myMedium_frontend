import Link from "next/link";
import { FC } from "react";
import { IUserPageProps } from "../../../pageInterfaces/UserPageProps";

const UserInfo: FC<IUserPageProps> = ({ user }) => {
  return (
    <div className="grid justify-between mb-2 md:grid-cols-3">
      <div>
        <p className="text-lg font-semibold ml-2">
          Email:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.email}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          Phone:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.phone}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          Site:{" "}
          <Link
            href={user.website}
            passHref
          >
            <a
              className="ml-2 inline-flex items-center text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </Link>
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold ml-2">
          City:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.address.city}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          Street:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.address.street}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          Suite:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.address.suite}
          </span>
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold ml-2">
          Company Name:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.company.name}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          Catch Phrase:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.company.catchPhrase}
          </span>
        </p>
        <p className="text-lg font-semibold ml-2">
          bs:{" "}
          <span className="text-slate-600 text-md font-medium">
            {user.company.bs}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
