import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "../Box/Box";
import avatar_anisha from "../../assets/avatar-anisha.png";
import avatar_ali from "../../assets/avatar-ali.png";
import avatar_richard from "../../assets/avatar-richard.png";
import avatar_shanai from "../../assets/avatar-shanai.png";
import RedButton from "../Buttons/RedButton";

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const userData = [
    {
      name: "Anisha Li",
      img: avatar_anisha,
      text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      name: "Ali Bravo",
      img: avatar_ali,
      text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      name: "Richard Watts",
      img: avatar_richard,
      text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      name: "Shanai Gough",
      img: avatar_shanai,
      text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentIndex = (index) =>
    (index + page + userData.length) % userData.length;

  return (
    <div className="flex flex-col items-center bg-primary-light_blue py-12 px-6">
      <h3 className="text-4xl font-bold text-primary-dark_blue mb-8">
        What they've said
      </h3>
      <br />
      <div className="flex flex-row overflow-hidden w-full justify-center space-x-4 md:space-x-4 sm:space-x-0">
        <AnimatePresence initial={false} custom={direction}>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={page + index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`flex-shrink-0 ${
                  index === 1 ? "w-full sm:w-10/12 md:w-4/12" : "hidden sm:block sm:w-0 md:w-4/12"
                } p-2 h-78`}>
                <Box
                  className="w-full h-full"
                  src={userData[currentIndex(index)].img}
                  text={userData[currentIndex(index)].text}
                  name={userData[currentIndex(index)].name}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <br />
      <br />
      <RedButton />
    </div>
  );
};

export default Slider;
