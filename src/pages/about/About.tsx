import { motion } from "framer-motion";

const experience = [
  {
    duration: "2021 - present",
    employer: "capital preferences",
    title: "senior front-end developer",
  },
  {
    duration: "2016 - 2021",
    employer: "telstra",
    title: "ui engineer",
  },
  {
    duration: "2014 - 2016",
    employer: "oregan networks",
    title: "ui developer",
  },
  {
    duration: "2011 - 2014",
    employer: "rare",
    title: "front-end developer",
  },
  {
    duration: "2008 - 2011",
    employer: "motim",
    title: "interaction designer",
  },
  {
    duration: "2007 - 2008",
    employer: "hit lab",
    title: "interaction designer",
  },
];

const About = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="flex h-full w-full flex-col items-center px-10"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div className="flex h-screen w-full items-center justify-center">
        <div className="mb-20 w-full max-w-3xl">
          <h1 className="font-display text-h1 font-medium text-text-500 md:text-[100px] xl:text-[140px]">
            hello.
          </h1>
          <h2 className="pl-1 font-display text-h5 text-text-500 md:text-h4">
            I'm a front-end developer and designer who likes to write clean,
            elegant, functional code and partner it with clean, beautiful
            design, and well thought out, user-friendly interfaces.
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mb-20 w-full max-w-3xl">
          <h2 className="mb-8 font-display text-h2 font-medium text-text-500 md:text-h1">
            experience.
          </h2>
          {experience.map(({ duration, employer, title }) => {
            return (
              <div className="mb-8">
                <h3 className="mb-1 text-h4 text-text-500">{title}.</h3>
                <h4 className="mb-2 text-h4 text-text-500">{employer}.</h4>
                <p className="text-h5 text-text-200">{duration}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-20 flex w-full justify-center">
        <div className="mb-20 w-full max-w-3xl">
          <h2 className="mb-8 font-display text-h2 font-medium text-text-500 md:text-h1">
            education.
          </h2>
          <div>
            <h3 className="mb-2 text-h4 text-text-500">
              bachelor of design (visual communication)
            </h3>
            <h4 className="mb-2 text-h5 text-text-400">
              christchurch polytechnic school of art & design, new zealand, 2006
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
