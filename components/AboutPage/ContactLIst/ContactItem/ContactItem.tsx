import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IContactItemProps {
  imagePath: string;
  contactUrl: string;
  socialNetworkName: string;
}

const ContactItem: FC<IContactItemProps> = ({
  imagePath,
  contactUrl,
  socialNetworkName,
}) => {
  return (
    <Link href={contactUrl}>
      <a className="rounded-lg shadow-md flex flex-col justify-center px-3 py-2 hover:shadow-none w-28">
        <Image
          src={imagePath}
          alt={socialNetworkName}
          width={50}
          height={50}
        />
        <p className="text-center">{socialNetworkName}</p>
      </a>
    </Link>
  );
};

export default ContactItem;
