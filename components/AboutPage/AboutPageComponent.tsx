import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import AuthorContactList from "./AuthorContactList/AuthorContactList";

const AboutPageComponent = () => {
  return (
    <div className="overflow-hidden p-4">
      <motion.div animate={{ opacity: [0, 1] }}>
        <div className="max-w-5xl px-6 py-4 m-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full shadow-lg">
            <Image
              className="object-cover mb-3 rounded-full"
              src={"/main/me.jpg"}
              layout="fill"
              alt="me"
              quality={50}
              loading="eager"
            />
          </div>
          <div className="flex-1 mb-6">
            <p className="text-xl text-slate-600 font-medium mb-3">
              Hi! My name is Olexandr I was born in Kramatorsk Donetsk region at
              1991. Now I&apos;m 31 y.o. and I live in Odesa. More than year ago
              I decide to start learn front end development. During this time I
              acquired skills in technologies such as HTML, CSS, Javascript,
              React, Angular and other. I have several projects of varying
              complexity using these technologies on my{" "}
              {
                <Link
                  href="https://github.com/Olexandr-Savelev"
                  passHref
                >
                  <a
                    className="ml-2 inline-flex items-center text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
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
              }
              . Now continue to improve my skills in this area and searching for
              the first job as a front end developer.
            </p>
          </div>
          <AuthorContactList />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPageComponent;
