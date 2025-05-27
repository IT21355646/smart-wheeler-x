import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";
import { GiBanknote } from "react-icons/gi";
import { FaHeartbeat, FaRobot, FaMobileAlt, FaWheelchair, FaBell, FaUserCheck, FaShareAlt } from "react-icons/fa";
import { diagram, python, keras, react, tensorflow, colabs, firebase, signs, neck, emotion, health } from "../assets";
import CommonTitle from "./CommonTitle";

const BusinessCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, title, desc } = props;
  return (
    <>
      <div className="flex items-center gap-2 ss:p-7 ss:gap-5 p-3 sm:p-5 feature-card rounded-2xl ss:rounded-3xl hover:bg-black-gradient cursor-pointer">
        <div className="p-4 bg-dimBlue rounded-full">
          <span className="text-2xl ss:text-[2rem] text-secondary">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-base sm:text-lg font-semibold">
            {title}
          </h3>
          <p className="text-dimWhite text-xs sm:text-base text-justify">{desc}</p>
        </div>
      </div>
    </>
  );
};

const objectives = [
  {
    emoji: "🤟",
    title: "Gesture-Based Wheelchair Control",
    description:
      "Empowers hearing- and speech-impaired users to control the wheelchair using real-time sign language recognition through computer vision, enabling hands-free and accessible navigation.",
    img: signs,
  },
  {
    emoji: "🧭",
    title: "Emotion-Aware Path Planning & Task Reminders",
    description:
      "Enhances autonomous navigation by adapting routes based on the user's emotional state and provides helpful task reminders to support memory and mental well-being.",
    img: emotion,
  },
  {
    emoji: "❤️",
    title: "Vital Health Monitoring",
    description:
      "Continuously monitors vital signs like heart rate, temperature, and oxygen levels, sending alerts in case of abnormalities to ensure timely caregiver intervention.",
    img: health,
  },
  {
    emoji: "🏋️",
    title: "Personalized Rehabilitation Support",
    description:
      "Delivers adaptive exercise plans with real-time motion tracking and feedback, ensuring effective physical therapy based on each user's performance and needs.",
    img: neck,
  },
];

// Reusable scene block with icon
// eslint-disable-next-line react/prop-types
const SceneBlock = ({ icon, title, text }) => (
  <motion.div
    className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto px-6 py-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-2xl shadow-md border border-gray-800"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-pink-400">{icon}</div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
  </motion.div>
);

// Side-by-side layout for split scenes
// eslint-disable-next-line react/prop-types
const SplitScene = ({ icon, title, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="bg-[#1a1a1a] p-6 rounded-full text-pink-400 border border-gray-800 shadow-lg">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const technologies = [
  { name: "Python", img: python },
  { name: "React", img: react },
  { name: "Tensorflow", img: tensorflow },
  { name: "Keras", img: keras },
  { name: "Firebase", img: firebase },
  { name: "Google Colab", img: colabs },
];

const gapItems = [
  {
    icon: <FaUserCheck className="text-3xl text-[#8a4fff]" />,
    title: "Identification & Classification",
    desc: "Current smart wheelchair systems can detect individual user needs—such as gesture-based controls or obstacle avoidance—but lack comprehensive identification and classification of users’ combined disabilities. Most systems are not designed to adapt to users with both physical and hearing impairments, limiting accessibility and personalization.",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-[#ef476f]" />,
    title: "Severity Assessment",
    desc: "Existing assistive solutions rarely assess the severity or urgency of a user’s health condition in real time. While vital signs may be monitored independently, there is insufficient integration of this data to assess risk levels or detect emergencies such as abnormal heart rate or oxygen levels.",
  },
  {
    icon: <FaShareAlt className="text-3xl text-[#00b4d8]" />,
    title: "Information Sharing",
    desc: "Information from gesture control, navigation, and health monitoring systems is often siloed and not communicated effectively to caregivers or medical professionals. Bridging this gap requires building a smart system that can securely transmit critical information for timely intervention.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeIn = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const Scope = () => {
  return (
    <section id="scope" className="font-poppins pb-10 md:py-16">
      {/* lit survey section */}
      <div className="flex items-center flex-col md:flex-row gap-10 md:gap-10 ss:gap-16 justify-between">
        <div className="flex flex-col gap-8 ss:gap-12 flex-1">
          <CommonTitle title="Literature Survey" />
          <p className="text-dimWhite text-base sm:text-lg text-justify">
            Smart wheelchairs are emerging as vital assistive technologies aimed at enhancing independence and quality of life for individuals with multiple disabilities. Traditional models, however, are often inadequate for users with both lower-limb impairments and hearing disabilities, as they depend on physical joysticks or voice commands. Vision-based gesture control systems that recognize sign language have proven to be effective alternatives, offering intuitive and non-verbal control interfaces [1]. These systems use deep learning models to accurately interpret both static and dynamic gestures in real time, providing reliable, hands-free operation. In terms of safety and mobility, autonomous navigation has become a critical focus.
          </p>
          <p className="text-dimWhite text-base sm:text-lg text-justify">
            LIDAR-based systems enable real-time obstacle detection and path replanning, allowing smart wheelchairs to move safely in cluttered or dynamic environments [2]. In addition to navigation, continuous health monitoring plays a crucial role, especially for users who may develop secondary complications such as poor oxygenation, pressure sores, or irregular heart activity. Wearable sensor-based systems integrated with cloud platforms now enable real-time monitoring of vital signs such as heart rate, temperature, and oxygen saturation, while also issuing emergency alerts and facilitating remote caregiver access [3]. While each of these innovations offers important benefits, most existing solutions operate independently. This research aims to combine gesture-based control, autonomous navigation, and real-time health monitoring into a single AI-powered smart wheelchair system that delivers an integrated solution for mobility, safety, and well-being.
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <BusinessCard
            icon={<FaStar />}
            title="Gesture-Based Control"
            desc="Enables intuitive wheelchair navigation through real-time sign language recognition using deep learning."
          />

          <BusinessCard
            icon={<MdOutlineSecurity />}
            title="Health Monitoring"
            desc="Continuously tracks vital signs like heart rate, temperature, and oxygen levels with cloud-connected sensors."
          />

          <BusinessCard
            icon={<GiBanknote />}
            title="Smart Navigation"
            desc="Uses LIDAR technology for obstacle detection and dynamic path planning to ensure safe movement."
          />

          <BusinessCard
            icon={<MdOutlineSecurity />}
            title="Rehabilitation Support"
            desc="Provides personalized exercise tracking and real-time feedback to assist users in their physical rehabilitation and improve overall well-being."
          />

          <p className="text-dimWhite text-base sm:text-lg">
            References
            </p>

          <p className="text-dimWhite text-base sm:text-sm text-justify">[1] “Deep Learning-Driven Sign Language Interpretation for Assistive Wheelchair Control,” IEEE Access, vol. 8, pp. 112340–112350, 2020.</p>

          <p className="text-dimWhite text-base sm:text-sm text-justify">[2] “LIDAR-Based Obstacle Detection and Navigation for Autonomous Wheelchairs,” in Proc. IEEE Int. Conf. on Robotics and Automation (ICRA), Montreal, Canada, 2019, pp. 1164–1170.</p>

          <p className="text-dimWhite text-base sm:text-sm text-justify">[3] “Wearable Health Monitoring System with Cloud Support for Wheelchair Users,” IEEE Internet of Things Journal, vol. 6, no. 5, pp. 8818–8828, Oct.2019.</p>
        </div>
      </div>

      {/* research gap section */}
      <section id="research-gap" className="py-16 px-6 md:px-12 font-poppins relative">
      <CommonTitle title="Research Gap" />
      <div className="max-w-5xl mx-auto mt-12 space-y-12">

        {gapItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 rounded-xl p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-lg hover:scale-[1.015] transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                {item.icon}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-dimWhite text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Blurred gradient decoration */}
      <div className="absolute w-40 h-40 rounded-full pink__gradient top-0 right-10 opacity-20 blur-2xl"></div>
    </section>

      {/* research prob n solution */}
      <section className="py-20 px-4 md:px-20 text-white">
      <CommonTitle title="Research Problem & Proposed Solution" />

      <div className="grid md:grid-cols-2 gap-12 mt-14">
        {/* Research Problem */}
        <motion.div
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md p-8 rounded-2xl shadow-lg border-l-4 border-red-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdOutlineSecurity className="text-red-400 text-3xl" />
            <h3 className="text-xl font-semibold">Research Problem</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-[15.5px]">
            Individuals with both lower-limb disabilities and hearing impairments face significant limitations when using traditional or even modern wheelchairs. Most assistive devices target a single issue—mobility, health monitoring, or control—but overlook the combined needs of these users. The absence of gesture-based interfaces, real-time environmental awareness, and integrated health tracking leads to fragmented support, reduced independence, and increased safety risks.
          </p>
        </motion.div>

        {/* Proposed Solution */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md p-8 rounded-2xl shadow-lg border-l-4 border-green-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdOutlineSecurity className="text-green-400 text-3xl" />
            <h3 className="text-xl font-semibold">Proposed Solution</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-[15.5px]">
            The proposed solution introduces a comprehensive AI-powered smart wheelchair that merges sign language gesture control, autonomous LIDAR navigation, and real-time health monitoring. Using computer vision, the system interprets sign language commands, while LIDAR ensures safe navigation in dynamic environments. Embedded health sensors monitor vitals like heart rate and oxygen saturation, sending alerts to caregivers if needed. This integration delivers a safer, more independent, and highly responsive mobility solution tailored for individuals with multiple impairments.
          </p>
        </motion.div>
      </div>
    </section>

      {/* Research Objectives section */}
      <section className="relative font-poppins py-10 sm:py-16 ">
      <CommonTitle title="Research Objectives" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {objectives.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 hover:shadow-secondary/50 transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full sm:w-40 h-40 object-contain rounded-xl"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.emoji} {item.title}
              </h3>
              <p className="text-dimWhite text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
    </section>

      {/* Methodology */}
      <section className="w-full py-16 px-4 sm:px-10 text-white font-poppins relative">
      <CommonTitle title="Methodology" />

      {/* System Architecture Image */}
      <div className="w-full mt-10 mb-16">
        <img
          src={diagram}
          alt="System Architecture"
          className="w-full h-auto rounded-xl shadow-xl border border-gray-700"
        />
      </div>

      {/* Methodology Scenes */}
      <div className="flex flex-col gap-20">

        {/* Scene 1: Overview */}
        <SceneBlock
          icon={<FaMobileAlt size={32} />}
          title="Assistive Platform Overview"
          text="The diagram presents the system architecture of the proposed assistive platform designed for individuals with physical and hearing impairments. The system integrates gesture-based communication, autonomous wheelchair navigation, continuous health monitoring, and caregiver coordination"
        />

        {/* Scene 2: Gesture Control */}
        <SplitScene
          icon={<FaRobot size={40} />}
          title="Gesture Recognition & Control"
          description="Users interact via a mobile app linked to a central API. ASL gestures are captured using a webcam, processed with MediaPipe, and classified by a Random Forest model. Recognized gestures are translated into commands and executed by a Raspberry Pi unit."
        />

        {/* Scene 3: Personalized Exercise Plan */}
        <SceneBlock
          icon={<FaRobot size={32} />}
          title="Adaptive Physical Exercise Plan"
          text="We introduce an adaptive physical exercise plan that uses real-time motion detection via a camera system. Based on the user’s age, injury, and fitness level, the system recommends personalized rehabilitation exercises. As users perform these movements, live motion tracking ensures proper form and provides real-time feedback. Exercise plans are updated dynamically based on performance, ensuring an engaging and customized therapy experience."
        />

        {/* Scene 4: Health Monitoring */}
        <SplitScene
          icon={<FaHeartbeat size={36} />}
          title="Wearable Health Monitoring"
          description="Wearable sensors connected to an ESP32 collect heart rate, SpO₂, and body temperature every five minutes. An onboard XGBoost model classifies heart attack risk, triggering alerts to caregivers in high-risk cases. All data is logged to Firebase for cloud-based monitoring."
        />

        {/* Scene 5: Autonomous Navigation */}
        <SceneBlock
          icon={<FaWheelchair size={32} />}
          title="Smart Wheelchair with Emotion-Based Routing"
          text="The smart wheelchair integrates LIDAR with Dijkstra and DWA algorithms for efficient pathfinding and obstacle avoidance. A CNN-based emotion recognition module adapts routes based on user emotions to enhance safety and comfort."
        />

        {/* Scene 6: Caregiver Coordination */}
        <SplitScene
          icon={<FaBell size={32} />}
          title="Task Reminders & Notifications"
          description="Finally, the system manages task reminders and notifications through the mobile app, supporting caregivers with early warnings, activity tracking, and real-time updates."
        />

      </div>
    </section>

      {/* Research Objectives section */}
      <section className="relative font-poppins py-10 sm:py-16">
        
      <CommonTitle title="Technologies" />

        {/* Technologies Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-40 h-40 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white flex items-center justify-center"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="text-white font-semibold text-lg tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient" />
      </section>
    </section>
  );
};

export default Scope;
