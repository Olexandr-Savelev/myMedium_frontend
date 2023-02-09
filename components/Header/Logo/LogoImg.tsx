import Image from "next/image";

export default function LogoImg(): JSX.Element {
  return (
    <>
      <Image
        src={"/main/logo.png"}
        width={50}
        height={28}
        alt="Medium_logo"
        quality={50}
        loading="eager"
      />
    </>
  );
}
