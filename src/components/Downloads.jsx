import { FaFilePdf, FaFileWord, FaFilePowerpoint, FaDownload } from "react-icons/fa6";
import CommonTitle from "./CommonTitle";

// Files with their types
const documents = [
  { name: "TAF", file: "/documents/documents/taf.pdf", type: "pdf" },
  { name: "Final Report - Sign language based navigation", file: "/documents/documents/finalreportK.pdf", type: "pdf" },
  { name: "Final Report - Lidar-based navigation", file: "/documents/documents/finalreportG.pdf", type: "pdf" },
  { name: "Final Report - Health monitoring", file: "/documents/documents/finalreportD.pdf", type: "pdf" },
  { name: "Final Report - Adaptive rehabilitation system", file: "/documents/documents/finalS.pdf", type: "pdf" },
];

const presentations = [
  { name: "TAF presentation", file: "/documents/presentations/taf.pptx", type: "ppt" },
  { name: "Progress presentation 1", file: "/documents/presentations/pp1.pdf", type: "pdf" },
  { name: "Progress presentation 2", file: "/documents/presentations/pp1.pdf", type: "pdf" },
];

// Icon Selector
const getFileIcon = (type) => {
  switch (type) {
    case "pdf":
      return <FaFilePdf className="text-red-500 text-4xl" />;
    case "doc":
      return <FaFileWord className="text-blue-500 text-4xl" />;
    case "ppt":
      return <FaFilePowerpoint className="text-orange-500 text-4xl" />;
    default:
      return <FaFilePdf className="text-gray-400 text-4xl" />;
  }
};

const Downloads = () => {
  return (
    <section id="downloads" className="relative font-poppins md:py-16 py-10">
      <div>
        <CommonTitle title="Downloads" />
        <p className="text-dimWhite md:text-lg text-base mb-8">
          Download key documents and presentations below.
        </p>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Documents Box */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-secondary/50 transition-shadow duration-300 rounded-2xl p-5 shadow-lg text-white flex flex-col items-center text-center">
            <h2 className="text-white text-xl font-semibold mb-4">Documents</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className=" p-4 rounded-xl flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-2xl shadow-lg hover:shadow-secondary/50 transition-shadow duration-300"
                >
                  {getFileIcon(doc.type)}
                  <p className="text-white mt-3 text-sm font-medium">{doc.name}</p>
                  <a
                    href={doc.file}
                    download
                    className="mt-3 px-4 py-1 bg-secondary text-black font-semibold text-sm rounded-full hover:opacity-90"
                  >
                    <FaDownload className="inline-block mr-1 mb-1" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Presentations Box */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-secondary/50 transition-shadow duration-300 rounded-2xl p-5 shadow-lg text-white flex flex-col items-center text-center">
            <h2 className="text-white text-xl font-semibold mb-4">Presentations</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {presentations.map((ppt, idx) => (
                <div
                  key={idx}
                  className=" p-4 rounded-xl flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-md rounded-2xl shadow-lg hover:shadow-secondary/50 transition-shadow duration-300"
                >
                  {getFileIcon(ppt.type)}
                  <p className="text-white mt-3 text-sm font-medium">{ppt.name}</p>
                  <a
                    href={ppt.file}
                    download
                    className="mt-3 px-4 py-1 bg-secondary text-black font-semibold text-sm rounded-full hover:opacity-90"
                  >
                    <FaDownload className="inline-block mr-1 mb-1" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute w-[20%] h-[40%] rounded-full right-0 top-40 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Downloads;
