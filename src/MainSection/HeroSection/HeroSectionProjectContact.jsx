const HeroSectionProjectContact = () => {
  return (
    <div className="gap-3 mt-8 font-serif flex justify-center md:gap-4">
      <a
        href="#projects "
        className=" inline-block bg-accent px-2  text-center capitalize text-gray-900 font-bold py-3  md:px-6 rounded-lg hover:bg-blue-400 transition-transform transform hover:scale-105 duration-300 "
      >
        Cheack Out My Work
      </a>
      <a
        href="#contact"
        className="inline-block text-center bg-gray-700 px-2  text-white capitalize font-bold py-3  md:px-6 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300"
      >
        Get in Touch
      </a>
    </div>
  );
};

export default HeroSectionProjectContact;
