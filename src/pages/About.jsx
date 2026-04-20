import ketchen from "../assets/ketchen.png";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-container/20 py-20">

      <div className="w-[90%] max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

      
        <img
          src={ketchen}
          alt="Chef"
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-tl-[50px] rounded-br-[50px]"
        />

  
        <div className="w-full lg:w-1/2 flex gap-6">

       
          <span className="hidden sm:block w-1.5 bg-secondary rounded-full"></span>

          <div className="flex flex-col">

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl text-secondary font-medium tracking-tight mb-6">
              Get to Know Us
            </h1>

            <div className="flex flex-col gap-5">

              <p className="text-secondary text-base sm:text-lg md:text-xl">
                Kamote Pops is a sweet potato snack—a bite-sized treat filled with
                three flavors. It has a crispy outside, and a soft, chewy inside.
              </p>

              <p className="text-secondary text-base sm:text-lg md:text-xl">
                The name comes from “Kamote” (sweet potato in Tagalog). The product
                is made into bite-size balls filled with cheese, dark chocolate,
                and milk chocolate.
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;