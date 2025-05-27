/* eslint-disable react/prop-types */
import { s1, s2, m1, m2, m3, m4 } from "../assets";
import CommonTitle from "./CommonTitle";

const people = [
  {
    name: "Ms. Dinithi Pandithage",
    role: "Supervisor",
    institute: "Sri Lanka Institute of Information Technology",
    department: "CSNE",
    image: s1,
  },
  {
    name: "Ms. Shashika Lokuliyana",
    role: "Co-Supervisor",
    institute: "Sri Lanka Institute of Information Technology",
    department: "CSNE",
    image: s2,
  },
];

const teamMembers = [
  {
    name: "S.N. Bentotage",
    role: "Undergraduate",
    institute: "Sri Lanka Institute of Information Technology",
    department: "IT",
    image: m1,
  },
  {
    name: "h.G.K.D. Premathilake",
    role: "Undergraduate",
    institute: "Sri Lanka Institute of Information Technology",
    department: "IT",
    image: m2,
  },
  {
    name: "T.M.S. Thennakoon",
    role: "Undergraduate",
    institute: "Sri Lanka Institute of Information Technology",
    department: "IT",
    image: m3,
  },
  {
    name: "A.W.D.M. Samarawickrama",
    role: "Undergraduate",
    institute: "Sri Lanka Institute of Information Technology",
    department: "IT",
    image: m4,
  },
];

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ person }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-secondary/50 transition-shadow duration-300 rounded-2xl p-5 shadow-lg text-white flex flex-col items-center text-center">
    <img
      src={person.image}
      alt={person.name}
      className="w-32 h-32 rounded-full object-cover border-2 border-secondary/50 shadow-md"
    />
    <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
    <p className="text-sm text-secondary/50">{person.role}</p>
    <p className="text-xs mt-1">{person.institute}</p>
    <p className="text-xs text-dimWhite">{person.department}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="py-14 font-poppins bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <CommonTitle title="About Us" />

        {/* Supervisors */}
        <div className="mt-10">
          <h2 className="text-white text-2xl font-semibold mb-6">Supervisors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {people.map((person, index) => (
              <ProfileCard key={index} person={person} />
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-16">
          <h2 className="text-white text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ProfileCard key={index} person={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
