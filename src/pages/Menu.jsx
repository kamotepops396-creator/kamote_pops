import chessey from "../assets/cheese.png";
import milkey from "../assets/milkey.png";
import chocoey from "../assets/chocoey.png";

const Menu = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col py-20">

      <div className="w-[90%] max-w-6xl">

       
        <div className="text-center mb-14">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-3">
            Our Signature Flavors
          </h2>

          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg font-medium">
            Small-batch artisan creations for every craving
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          
          <div className="group bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl shadow-on-surface/5 hover:-translate-y-2 transition-all duration-300">

            <div className="mb-5 overflow-hidden rounded-lg bg-surface-container">
              <img
                src={chessey}
                alt="Cheesy"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">
              ORIGINAL
            </span>

            <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-2">
              Cheesey
            </h3>

            <p className="text-on-surface-variant text-sm md:text-base">
              The one that started it all. Savory cheese melt inside a crispy sweet potato dough.
            </p>

          </div>

        
          <div className="group bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl shadow-on-surface/5 hover:-translate-y-2 transition-all duration-300">

            <div className="mb-5 overflow-hidden rounded-lg bg-surface-container">
              <img
                src={chocoey}
                alt="Chocoey"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">
              DARK CHOCOLATE
            </span>

            <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-2">
              Chocoey
            </h3>

            <p className="text-on-surface-variant text-sm md:text-base">
              70% dark cocoa core that flows like lava when bitten.
            </p>

          </div>

       
          <div className="group bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl shadow-on-surface/5 hover:-translate-y-2 transition-all duration-300">

            <div className="mb-5 overflow-hidden rounded-lg bg-surface-container">
              <img
                src={milkey}
                alt="Milkey"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-2 block">
              WHITE CHOCOLATE
            </span>

            <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-2">
              Milkey
            </h3>

            <p className="text-on-surface-variant text-sm md:text-base">
              Silky white chocolate with a creamy sweet finish.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;