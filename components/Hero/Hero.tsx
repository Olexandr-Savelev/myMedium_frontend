import { motion } from "framer-motion"
import styles from './Hero.module.scss'

export default function Hero() {

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
    }

    return (

        <div className="max-w-7xl flex bg-yellow-400 min-h-[300px] max-h-[80vw] mx-auto overflow-hidden">
            <div className="space-y-3 max-w-[50%] leading-[1.8rem] m-auto text-left text-xl sm:text-3xl sm:leading-[2.2rem] md:leading-[3.2rem] md:text-5xl md:px-[20px] ">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    variants={variants}
                >

                    <p className={styles.main_text}><strong className="text-4xl underline md:text-6xl">Medium</strong> is a place to write, read, and connect.</p>
                    <p className={styles.secondary_text}>It&apos;s easy and free to post you thinking on any topic and connect wuth millions of readers.</p>
                </motion.div>
            </div>
            <div className="animate-pulse max-w-[50%] leading-[285px] m-auto px-[20px] text-[120px] sm:text-[300px] sm:leading-[1.2] text-center md:text-[400px] ">M</div>
        </div >

    )
}
