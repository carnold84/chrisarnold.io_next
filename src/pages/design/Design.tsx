import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const modules: any = import.meta.glob("../../content/design/*.md", {
  eager: true,
});
const mdFiles: any[] = [];

for (const path in modules) {
  mdFiles.push(modules[path]);
}

mdFiles.sort((a, b) => {
  return a.attributes.order - b.attributes.order;
});

const Design = () => {
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
      <div className="flex w-full max-w-7xl flex-col gap-3 p-10 lg:flex-row lg:gap-10 xl:p-20">
        <h1 className="font-500 font-display text-h1 font-medium text-text-500">
          design.
        </h1>
        <div className="grid grow grid-cols-2 gap-10 md:gap-8 lg:mt-5">
          {mdFiles.map(({ attributes }) => {
            return (
              <Link
                className="group w-full overflow-hidden outline-none"
                key={attributes.path}
                to={attributes.path}
              >
                <img
                  className="mb-3 h-48 w-full border border-neutral-100 object-cover object-top transition-all duration-1000 ease-out-expo group-hover:scale-95"
                  src={attributes.thumbnail}
                />
                <h2 className="font-display text-h5 font-normal text-text-500">
                  {attributes.title}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Design;
