import { GetStaticProps } from "next";
import {
  Contact,
  ContactsPageProps,
} from "../pageInterfaces/ContactsPageProps";
import { motion } from "framer-motion";

const Contacts = ({ contactList }: ContactsPageProps): JSX.Element => {
  return (
    <div className="overflow-hidden">
      <motion.div animate={{ y: [-1000, 0] }}>
        {contactList.map((contact: Contact) => (
          <div
            key={contact.id}
            className="text-center mx-auto py-3 flex flex-col gap-2 max-w-5xl border-b-2"
          >
            <h2 className="text-4xl pb-2 underline">{contact.name}</h2>
            <p className="text-2xl">{contact.email}</p>
            <p className="text-3xl">{contact.address.city}</p>
            <p className="text-2xl">{contact.address.street}</p>
            <p className="text-3xl">{contact.phone}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const contactList = await response.json();

  return {
    props: {
      contactList,
    },
  };
};

export default Contacts;
