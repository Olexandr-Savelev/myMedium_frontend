import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={contactUrl}
      passHref
    >
      <a
        className="rounded-lg shadow-md flex flex-col justify-center px-3 py-2 hover:shadow-none w-28"
        target="_blank"
      >
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
