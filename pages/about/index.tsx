import React from "react";
import styles from "./AboutPage.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ opacity: [0, 1] }}
        className={styles.wrapper}
      >
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          autem vero magni harum obcaecati in amet eos vitae, temporibus unde
          iste. Libero nihil dignissimos, iste nisi, delectus omnis illum beatae
          repellendus aspernatur quibusdam ex non dolor necessitatibus et
          debitis excepturi aliquid possimus commodi sequi aut quis laborum
          deleniti. Quisquam itaque dolorem quibusdam libero minima labore dolor
          nihil nam at natus corporis dolorum, quos veritatis, excepturi earum
          harum! Nostrum nemo labore amet deleniti hic quos ullam est placeat
          eaque odit. Cum, adipisci. Aspernatur tempora perferendis laboriosam
          temporibus magni officia similique aliquam architecto provident
          explicabo consequatur, est non quae eligendi debitis ea sint nemo odit
          dicta. Vel quasi ab assumenda quidem facere delectus officia iste rem
          magnam porro quam, impedit qui laboriosam mollitia recusandae soluta,
          ipsam nam possimus debitis cum alias maxime nisi. Eligendi eos nisi
          soluta ducimus aut pariatur sequi, id dolorum blanditiis sit, beatae
          vitae labore, doloribus voluptatem ipsum non.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
