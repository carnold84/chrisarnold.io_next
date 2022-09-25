import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="mt-10 flex h-full w-full justify-center"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div className="flex w-full max-w-7xl flex-col gap-2 px-10 md:flex-row md:gap-10 lg:px-20">
        <h1 className="font-display text-h2 font-medium text-text-500 md:text-h1">
          about.
        </h1>
        <div className="md:mt-5">
          <p className="mb-3 font-body text-body text-text-500">
            I started out getting a degree in graphic design (Bachelor of Design
            - Visual Communication Design) in 2006, but I have always been
            fascinated by technology, computers and, particularly, the internet.
          </p>
          <p className="mb-3 font-body text-body text-text-500">
            After completing my degree I got a job developing interactive
            medical animations in Adobe Flash. From there I taught myself
            Actionscript 3.0 and moved on to developing more complex
            applications including early augmented reality in the browser. I
            taught myself HTML, CSS and JQuery.
          </p>
          <p className="mb-3 font-body text-body text-text-500">
            In 2011 I moved to Melbourne, Australia and started working as a
            front-end developer for a small agency building websites and
            applications in HTML, CSS, JQuery, and Flash, and integrating with
            PHP backends.
          </p>
          <p className="mb-3 font-body text-body text-text-500">
            In 2014 I moved to London, UK and started work for a company
            building set-top boxes for televisions. The UI was built in HTML,
            CSS, and pure javascript, and ran in customised versions of Chrome
            (for faster devices) and QT Browser (for slower devices). This was a
            fascinating project and I learned a vast amount. From achieving
            complex functionality in plain javascript with no libraries, to
            integrating with platform apis, and squeezing the maximum
            performance from relatively under-powered hardware.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
