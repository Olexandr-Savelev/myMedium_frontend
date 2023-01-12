import { NextPage } from "next";

const FourOhFour: NextPage = () => {
  return (
    <div className="min-w-full flex items-center justify-center absolute top-[50%] translate-y-[-50%]">
      <h2 className="text-3xl">404</h2>
      <span className="h-[25px] w-[1px] bg-black mx-2"></span>
      <p className="text-3xl font-light">Page don&apos;t found</p>
    </div>
  );
};

export default FourOhFour;
