const OrderProcess = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">

      <div className="px-6 max-w-7xl mx-auto text-center" id="order">

      
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-14">
          How to Order
        </h2>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 relative">

        
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px border-t border-dashed border-primary/30 z-0" />

        
          <Step number="1" title="Choose your flavor"
            desc="Browse our signature collection and pick your favorites." />

         
          <Step number="2" title="Message us"
            desc="Send us a direct message on our social channels." />

       
          <Step number="3" title="Give us your details"
            desc="Provide your address and preferred delivery time." />

          
          <Step number="4" title="Wait for your pops!"
            desc="Relax as we prepare your hot, fresh Kamote Pops." />

        </div>

   
        <a
          href="https://www.facebook.com/kamotepopssweetpotatoballs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-on-primary px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold shadow-2xl shadow-secondary/20 hover:bg-primary transition-all duration-300"
        >
          Message us now
        </a>

      </div>
    </div>
  );
};

export default OrderProcess;
const Step = ({ number, title, desc }) => {
  return (
    <div className="relative z-10 flex flex-col items-center">

      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary text-on-primary rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mb-5 shadow-xl shadow-primary/20">
        {number}
      </div>

      <h4 className="font-headline text-lg sm:text-xl font-bold text-secondary mb-2">
        {title}
      </h4>

      <p className="text-sm sm:text-base text-on-surface-variant px-2 sm:px-4">
        {desc}
      </p>

    </div>
  );
};