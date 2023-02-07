import Image from "next/image";

type Props = {
  layout?: "fill" | "responsive" | "intrinsic" | "fixed";
};

export default function LogoImg(props: Props): JSX.Element {
  return (
    <>
      <Image
        src={"/main/logo.png"}
        width={50}
        height={28}
        alt="Medium_logo"
        quality={50}
        {...props}
      />
    </>
  );
}
