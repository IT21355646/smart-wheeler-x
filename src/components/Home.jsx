import { discount, admin } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:items-center flex-col md:flex-row gap-10 md:gap-0"
    >
      <div className="flex flex-col gap-5 flex-1 pr-10 md:pr-0">
        <div className="flex items-center gap-2 font-poppins bg-discount-gradient py-2 px-3 xs:px-5 text-lg rounded-xl w-[100%] xs:w-fit">
          <img src={discount} alt="discount" />
          <p className="sm:text-base text-xs">
            <span className="text-[#5A595E] font-[500]">Empowering Independence with Smart Mobility..</span>{" "}
          </p>
        </div>

        <div className="relative">
          <h1 className="text-[3.3rem] sm:text-6xl leading-snug sm:leading-normal md:text-7xl md:leading-snug font-[600] font-poppins">
            The<br className="md:block hidden" />{" "}
            <span className="text-gradient">Smart</span>{" "}
            <br className="md:block hidden " /> Wheelar{" "}
            <br className="md:block hidden " />
          </h1>
          <div className="absolute top-0 left-[350px] md:left-[400px] md:block hidden">
            <GetStarted />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-dimWhite sm:mt-5 md:max-w-[470px] text-justify">
          Our Smart Wheelchair is designed for individuals with hearing and lower-limb disabilities, offering intuitive sign language control, LIDAR-based obstacle detection, real-time health tracking, and personalized rehabilitation support. Powered by AI, IoT, and computer vision, it redefines mobility with safety, independence, and smart care at its core.
        </p>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <img
          src={admin}
          alt="robot"
          className="w-2/3 h-1/3 md:w-2/3 md:h-auto"
        />
        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>

    </section>
  );
};

export default Hero;
