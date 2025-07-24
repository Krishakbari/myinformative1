// import React from 'react';
// import twentysix from "../assets/26.png"
// const AppleWatchBanner = () => {
//   return (
//     <div className="relative w-full max-w-[1400px] mt-20 mb-16 mx-auto">
//       {/* Main banner container with overflow hidden */}
//       <div className="relative bg-gradient-to-r from-green-400 to-green-500 h-[400px] rounded-3xl px-16 py-12 overflow-hidden shadow-2xl">
//         {/* Left content */}
//         <div className="relative z-10 flex justify-between items-center">
//           <div className="text-white">
//             <div className="text-sm font-medium mb-2 opacity-90">30% OFF</div>
//             <h1 className="text-6xl font-bold mb-2 leading-none">
//               HAPPY<br />HOURS
//             </h1>
//             <div className="text-sm opacity-80">14 Jan to 28 Jan</div>
//           </div>
          
//           {/* Right content */}
//           <div className="text-white text-right">
//             <div className="text-sm font-medium mb-2">Smart Solo</div>
//             <h2 className="text-4xl font-bold mb-4">Winter Sale</h2>
//             <p className="text-sm opacity-80 mb-6 max-w-xs">
//               Lorem ipsum, dolor sit amet consectetur adipiscing elit.<br />
//               Eaque reiciendis
//             </p>
//             <button className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               Shop Now
//             </button>
//           </div>
//         </div>

//         {/* Background decorative elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/10 rounded-full"></div>
//           <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-white/5 rounded-full"></div>
//         </div>
//       </div>

//       {/* Apple Watch breaking out of the banner */}
//       <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//         <img 
//           src={twentysix} 
//           alt="Apple Watch" 
//           className="h-[450px] w-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default AppleWatchBanner;




import React from 'react';
import twentysix from "../assets/26.png"

const AppleWatchBanner = () => {
  return (
    <div className="relative w-full max-w-[1400px] mt-10 md:mt-20 mb-10 md:mb-16 mx-auto px-4">
      {/* Main banner container with overflow hidden */}
      <div className="relative bg-gradient-to-r from-green-400 to-green-500 h-[350px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12 overflow-hidden shadow-2xl">
        {/* Content Container - Adjusted for image space */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center h-full">
          {/* Left content */}
          <div className="text-white mb-6 md:mb-0 w-full md:w-auto md:max-w-xs">
            <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 opacity-90">30% OFF</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 leading-none">
              HAPPY<br />HOURS
            </h1>
            <div className="text-xs sm:text-sm opacity-80">14 Jan to 28 Jan</div>
          </div>
          
          {/* Right content */}
          <div className="text-white text-left md:text-right w-full md:w-auto md:max-w-xs">
            <div className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 ">Smart Solo</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Winter Sale</h2>
            <p className="text-xs sm:text-sm opacity-80 mb-3 sm:mb-6">
              Lorem ipsum, dolor sit amet consectetur adipiscing elit.
              Eaque reiciendis
            </p>
            <button className="bg-white text-green-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 sm:-right-24 md:-right-32 -top-16 sm:-top-24 md:-top-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/10 rounded-full"></div>
          <div className="absolute -left-16 sm:-left-24 md:-left-32 -bottom-16 sm:-bottom-24 md:-bottom-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full"></div>
        </div>
      </div>

      {/* Apple Watch breaking out of the banner - Always visible and centered */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={twentysix}
          alt="Apple Watch" 
          className="h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] w-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300 sm:opacity-100 opacity-60 sm:z-10 z-0"
        />
      </div>
    </div>
  );
};

export default AppleWatchBanner;