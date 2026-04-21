import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const DetailsModal = ({
  isOpen,
  onClose,
  image,
  tag,
  title,
  description,
  tip,
}) => {
  if (!isOpen) return null;
const prices = [
  { pieces: 3, price: 20 },
  { pieces: 6, price: 40 },
  { pieces: 9, price: 60 }
];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
     
      <div
        className="absolute inset-0 bg-[#311300]/60 backdrop-blur-sm"
        onClick={onClose}
      />

     
      <div className="relative bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300">
        
       
        <button
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-surface flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-secondary">
            <FontAwesomeIcon icon={faX}/>
          </span>
        </button>

        <div className="grid md:grid-cols-2">
          
          
          <div className="relative h-80 md:h-auto bg-surface-container overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#311300]/40 to-transparent" />
          </div>

         
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">
              {tag}
            </span>

            <h2 className="font-headline text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              {title}
            </h2>

            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-8">
              {description}
            </div>
            <div className="flex flex-col gap-1 mb-3">
                 <h4 className="font-headline text-xl font-bold text-secondary mb-4">
                Price List
              </h4>
                {
                    prices.map((price, index)=>(
                         <p className="text-on-surface-variant italic">{price.pieces+ " Pieces" + " = " + price.price + " Pesos"}</p>
                    ))
                }
            </div>
            <div className="border-t border-outline-variant pt-8">
              <h4 className="font-headline text-xl font-bold text-secondary mb-4">
                   Pro-tip
              </h4>
              <p className="text-on-surface-variant italic">{tip}</p>
            </div>

            <button
              className="mt-12 text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
              onClick={onClose}
            >
              <span className="material-symbols-outlined"><FontAwesomeIcon icon={faArrowLeft}/></span>
              Back to flavors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;