import { motion } from "framer-motion";
import { Project } from "./Design";
import DesignCard from "./components/DesignCard/DesignCard";

interface Props {
  projects: Project[];
}

const DesignHome = ({ projects }: Props) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="flex h-full w-full justify-center"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div className="mt-20 flex w-full max-w-7xl flex-col gap-3 lg:flex-row lg:gap-10">
        <h1 className="font-500 mb-3 text-center font-display text-h2 font-medium text-text-500 sm:text-h1">
          design.
        </h1>
        <div className="grid grow grid-cols-1 gap-10 md:gap-8 lg:mt-5 xs:grid-cols-2">
          {[...projects]
            .sort((a, b) => a.attributes.order - b.attributes.order)
            .map(({ attributes }, i) => {
              return (
                <DesignCard
                  key={attributes.id}
                  number={i + 1}
                  thumbnail={attributes.thumbnail}
                  title={attributes.title}
                  to={attributes.path}
                />
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default DesignHome;
