import { FaArrowRight, FaVideo, FaYoutube, FaProductHunt, FaReddit } from 'react-icons/fa';

const HeroSection = () => {
    
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
          <span className="text-sm font-medium">Bookern is out! See what's new</span>
          <FaArrowRight className="ml-2 w-5 h-5" />
        </a>
        <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-6xl">
            We invest in the world's potential
        </h1>
        <p className="mb-8 text-lg font-normal text-slate-600 lg:text-xl sm:px-16 xl:px-48">
          Here at Bookern we focus on homes where comfort, memories can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <FaArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            <FaVideo className="mr-2 w-5 h-5" />
            Watch video
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
      <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
        <a href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <FaYoutube className="w-8 h-8 mr-2" />
          <span className="text-gray-500 dark:text-gray-400">YouTube</span>
        </a>
        <a href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <FaProductHunt className="w-8 h-8 mr-2" />
          <span className="text-gray-500 dark:text-gray-400">Product Hunt</span>
        </a>
        <a href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
          <FaReddit className="w-8 h-8 mr-2" />
          <span className="text-gray-500 dark:text-gray-400">Reddit</span>
        </a>
      </div>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
