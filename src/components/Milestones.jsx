import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import CommonTitle from "./CommonTitle";

const milestonesData = [
  {
    date: "May 2024",
    title: "Topic Assessment Form (TAF)",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: "6%",
  },
  {
    date: "August 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: "6%",
  },
  {
    date: "July 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: "6%",
  },
  {
    date: "March 2025",
    title: "Research Paper",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marks: "10%",
  },
  {
    date: "March 2025",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
    marks: "18%",
  },
  {
    date: "April 2024",
    title: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks include Individual & group reports and the Final report.",
    marks: "19%",
  },
  {
    date: "May 2025",
    title: "Final Presentation & Viva",
    description:
      "Viva is held individually to assess each member's contribution to the project.",
    marks: "20%",
  },
  {
    date: "June 2025",
    title: "Submission of RP- Acceptance notification",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks include Individual & group reports and the Final report.",
    marks: "19%",
  },
  {
    date: "June 2025",
    title: "Website Assessment",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
    marks: "2%",
  },
  {
    date: "June 2025",
    title: "Logbook",
    description:
      "Status of the project is validated through the Logbook. This also includes Status documents 1 & 2.",
    marks: "3%",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 50 },
  }),
};

const Milestones = () => {
  return (
    <section
      id="milestones"
      className="py-12 sm:py-20 font-poppins max-w-5xl mx-auto px-4"
    >
      <CommonTitle title="Timeline" /><br />

      <div className="border-l-4 relative border-gray-900">
        {milestonesData.map(({ date, title, description, marks }, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-8 relative rounded-lg p-5 cursor-pointer bg-gray-900/20 bg-white/5 backdrop-blur-md border border-white/10 shadow-md"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {/* Dot */}
            <span className="absolute -left-7 top-5 w-5 h-5 bg-secondary rounded-full border-4 border-gray-900"></span>

            {/* Date */}
            <p className="text-secondary font-semibold text-sm sm:text-base mb-1">{date}</p>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>

            {/* Description */}
            <p className="text-dimWhite text-base sm:text-lg mb-3">{description}</p>

            {/* Marks and Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1 text-green-400 font-semibold">
                <FaStar />
                <span>{marks} Marks Allocated</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-green-400 h-full rounded-full"
                  style={{ width: marks }}
                ></div>
              </div>
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Milestones;
