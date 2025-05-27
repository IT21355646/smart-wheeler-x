import { motion } from "framer-motion";
import CommonTitle from "./CommonTitle";
import { silverjubilee, jubilee, certificates, ishanka, doctor } from "../assets";

const Achievements = () => {
  return (
    <section id="achievements" className="relative font-poppins py-16 px-4">
      <CommonTitle title="Our Achievements" />

      {/* Exhibition Image Showcase */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[silverjubilee, certificates, jubilee].map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
          >
            <img
              src={img}
              alt={`exhibit-${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Key Supporters */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">Interested Buyers</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Doctor */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md"
          >
            <img
              src={doctor}
              alt="doctor"
              className="w-24 h-24 object-cover rounded-full border-2 border-white"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">Dr. K.S.C. Kumara </h4>
              <p className="text-white/80 text-sm">MO Heamatology</p>
              <p className="text-white/60 text-sm">DGH Ampara</p>
              <p className="text-white/60 text-sm mt-1">📞 +94 71 816 4364</p>
            </div>
          </motion.div>

          {/* Tech Lead */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-6 bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md"
          >
            <img
              src={ishanka}
              alt="tech lead"
              className="w-24 h-24 object-cover rounded-full border-2 border-white"
            />
            <div>
              <h4 className="text-lg font-semibold text-white">Ishanka Devendra</h4>
              <p className="text-white/80 text-sm">Chief Technology Officer</p>
              <p className="text-white/60 text-sm">ByIT Holdings Co.Ltd.</p>
              <p className="text-white/60 text-sm mt-1">📞 +81 80-8029-5525</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Visitor Feedback Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-white">Visitor Feedback</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Excellent work... We are first year students , your projects helps us too we can get ideas from these, so helpfull . According to your smart wheel chair i think the only thing im thinking is if there is an ubnormal person like who having some disability they can't correctly follow the instructions in practical life , otherwise this is good.Keep work on it.  best of luck for your further procedures 🎉✨",
            "It's very good. First i saw that project,  it looks like simple project but when they are explain then i realise they put more  effort this and it's helpful for disabilitie peoples and best of luck for your further creative. ",
            "Awesome.. A really good combination for the disabled persons with sign language, automation and wheelchair exercises. Nice explanation. Interesting 🙌",
            "Impressive work on the wheelchair project! The design shows thoughtful consideration for user comfort and accessibility. With a few refinements, it has strong potential for real-world application.",
            "Really impressed. Hope to see in real world production level"
          ].map((feedback, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-5 rounded-lg border border-white/10 text-white/80 shadow"
            >
              <p className="italic">“{feedback}”</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient z-[-1]" />
    </section>
  );
};

export default Achievements;
