import kamoteball1 from "../assets/kamoteball1.png";
import kamoteball2 from "../assets/kamoteball2.png";
import kamoteball3 from "../assets/kamoteball3.png";

const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">

      {/* Background image */}
      <img
        src={kamoteball1}
        alt="Hero Background"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Floating images */}
      <img
        src={kamoteball2}
        alt="Hero Ball 1"
        className="w-40 md:w-80 h-40 md:h-80 rounded-full absolute top-20 left-5 md:left-20 object-cover z-10"
      />

      <img
        src={kamoteball3}
        alt="Hero Ball 2"
        className="w-40 md:w-80 h-40 md:h-80 rounded-full absolute bottom-20 right-5 md:right-20 object-cover z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px] z-20" />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6">

        <span className="mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs md:text-sm tracking-widest uppercase backdrop-blur-sm">
          Made with love and joy
        </span>

        <h1 className="font-extrabold text-primary tracking-tighter leading-none 
          text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]">
          Kamote Pops
        </h1>

        <p className="text-secondary font-medium text-xl sm:text-2xl md:text-4xl mt-4">
          Sweet Potato Balls
        </p>

        <p className="text-on-surface text-sm sm:text-base md:text-xl italic mt-6 max-w-md">
          “You can have it all in one bite—grab your sweet snack now”
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#menu"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            See our flavors
          </a>

          <a
            href="#about"
            className="bg-white/30 border border-primary/30 text-primary px-8 py-4 rounded-full font-bold backdrop-blur-md hover:bg-white/50 transition"
          >
            Our Story
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;