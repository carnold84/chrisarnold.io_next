import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  number: number;
  thumbnail: string;
  title: string;
  to: string;
}

const THRESHOLD = 20;

const DesignCard = ({ number, thumbnail, title, to }: Props) => {
  const controls = useAnimation();

  const onMouseMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;

    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    controls.set({
      perspective: `${clientWidth}px`,
      rotateX: `-${rotateY}deg`,
      rotateY: `${rotateX}deg`,
      scale: 0.95,
    });
  };

  const onMouseLeave = (e: any) => {
    const { clientWidth } = e.currentTarget;

    controls.set({
      perspective: `${clientWidth}px`,
      rotateX: `0deg`,
      rotateY: `0deg`,
      scale: 1,
    });
  };

  return (
    <Link
      className="project-link group w-full overflow-hidden outline-none"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      to={to}
    >
      <motion.img
        animate={controls}
        className="mb-3 h-64 w-full origin-center border border-neutral-100 object-cover object-top transition-all ease-linear will-change-transform md:h-60 xs:h-56"
        src={thumbnail}
        style={{
          transformStyle: "preserve-3d",
        }}
        transition={{
          default: { duration: 0.1, ease: "linear" },
          scale: { duration: 3, ease: "linear" },
        }}
      />
      <h2 className="font-display text-h3 font-normal text-text-500">
        {number} {title}
      </h2>
    </Link>
  );
};

export default DesignCard;
