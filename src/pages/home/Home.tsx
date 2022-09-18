import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="absolute flex h-full w-full items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div className="mb-40 flex max-w-6xl flex-col items-start px-10 md:flex-row lg:items-center lg:px-20">
        <h1 className="font-display text-h1 font-medium text-text-500 md:text-[100px] lg:text-[140px]">
          hello.
        </h1>
        <p className="text-body text-text-500 md:ml-8 md:mt-6 lg:mt-5">
          I'm a front-end developer and designer from New Zealand. I like to
          write clean, elegant, functional code and partner it with clean,
          beautiful design and well thought out, user-friendly interfaces.
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
