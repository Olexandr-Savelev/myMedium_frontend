import { FC } from "react";

import ContactItem from "../ContactItem/ContactItem";

const contacts = [
  {
    imagePath: "/social/telegram.svg",
    contactUrl: "https://t.me/OlexandrSavelev",
    socialNetworkName: "Telegram",
  },
  {
    imagePath: "/social/gmail.svg",
    contactUrl: "https://a.savelev.krm@gmail.com",
    socialNetworkName: "Gmail",
  },
  {
    imagePath: "/social/facebook.svg",
    contactUrl: "https://www.facebook.com/a.savelev.krm",
    socialNetworkName: "Facebook",
  },
  {
    imagePath: "/social/linkedin.svg",
    contactUrl: "https://www.linkedin.com/in/olexandr-savelev-93394b243/",
    socialNetworkName: "LinkedIn",
  },
  {
    imagePath: "/social/skype.svg",
    contactUrl: "https://join.skype.com/invite/zCnUNjYHoyZU",
    socialNetworkName: "Skype",
  },
];

const AuhorContactList: FC = () => {
  return (
    <div className="max-w-2xl mx-auto flex gap-4 justify-center flex-wrap">
      {contacts.map((contact) => (
        <div key={contact.socialNetworkName}>
          <ContactItem {...contact} />
        </div>
      ))}
    </div>
  );
};

export default AuhorContactList;
