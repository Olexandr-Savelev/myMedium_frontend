import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex-[0_0_auto] h-14 shadow-md border-t-[1px] border-slate-400 bg-white w-full flex items-center justify-center p-3">
      <p className="text-center">
        Designed with Next.js and TailwindCSS by Savelev Olexandr
      </p>
    </div>
  );
};

export default Footer;
