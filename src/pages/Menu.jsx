import chessey from "../assets/cheese.png";
import milkey from "../assets/milkey.png";
import chocoey from "../assets/chocoey.png";
import { useState } from "react";
import DetailsModal from "../Components/DetailsModal";

const Menu = () => {
  const [selected, setSelected] = useState(null)
 const flavors = [
    {
      id: 1,
      tag: "Original",
      title: "Cheesy",
      tagline: "The one that started it all.",
      intro: "Savory cheese melt inside a crispy sweet potato dough.",
      description:
        "Cheesy and savory goodness in every bite. A perfect blend of sweet potato and melted cheese that creates an irresistible snack. Every bite creates a pull of cheesy goodness. Perfect for every cheese lovers out there!",
      tip: "Best enjoyed hot for that perfect cheese pull.",
      image: chessey,
    },

    {
      id: 2,
      tag: "Dark Chocolate",
      title: "Chocoey",
      tagline: "Indulge in rich chocolate goodness.",
      intro: "Sweet potato balls with luscious dark chocolate drizzle.",
      description:
        "Rich and bold chocolate flavor that pairs perfectly with the natural sweetness of kamote. Bold, rich, and slightly bitter for a more intense dessert experience. Perfectly crafted for chocolate lovers. A must-try treat!",
      tip: "Perfect for chocolate lovers craving a rich bite.",
      image: milkey,
    },

    {
      id: 3,
      tag: "Milk Chocolate",
      title: "Milkey",
      tagline: "Creamy, smooth, and satisfying.",
      intro: "Sweet potato balls blended with creamy milk chocolate.",
      description:
        "Smooth, creamy, and sweet – a classic favorite that makes every bite extra indulgent and satisfying. Balanced sweetness from milk chocolate and sweet potato. Each bite offers a delightful flavor experience.",
      tip: "Best paired with a cold drink.",
      image: chocoey,
    },
  ];
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col py-20">
      <DetailsModal isOpen={!!selected}
        onClose={() => setSelected(null)}
        {...selected}/>
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
          {flavors.map((flavor, index) => (
            <div onClick={()=>setSelected(flavor)} key={flavor.id} className="group bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-xl shadow-on-surface/5 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-5 overflow-hidden rounded-lg bg-surface-container">
                <img
                  src={flavor.image}
                  alt="Cheesy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-2">
                {flavor.title}
              </h3>

              <p className="text-on-surface-variant text-sm md:text-base">
               {
                flavor.intro
               }
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
