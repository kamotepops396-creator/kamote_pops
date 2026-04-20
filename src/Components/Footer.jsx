const Footer = () => {
  return (
    <div className="bg-[#88512b] z-100 dark:bg-stone-950 py-8 w-full font-['Plus_Jakarta_Sans'] text-sm tracking-wide text-[#fff8f2]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-6">
        <div className="font-['Newsreader'] text-xl font-bold text-[#fff8f2]">
          Kamote Pops
        </div>
        <p className="opacity-80">© {new Date().getFullYear()} Kamote Pops. Made with love and joy.</p>
        <div className="flex gap-8">
          <a
            className="text-[#fff8f2]/80 hover:text-[#fff8f2] transition-opacity text-lg"
            href="https://www.facebook.com/kamotepopssweetpotatoballs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
