import Image from "next/image";
import logo from "./logo.png";

type Props = {
  layout?: "fill" | "responsive" | "intrinsic" | "fixed";
};

export default function LogoImg(props: Props): JSX.Element {
  return (
    <>
      <Image
        src={logo}
        width={50}
        height={28}
        // layout="fill"
        alt="Medium_logo"
        {...props}
      />
    </>
  );
}
