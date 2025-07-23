import React from 'react';
import twentyseven from "../assets/27.jpg";
import twentyeight from "../assets/28.jpg";
import twentynine from "../assets/29.jpg";

const RecentNews = () => {
  const newsItems = [
    {
      id: 1,
      image: twentyseven,
      date: "Jan 20, 2024",
      author: "Ditshad",
      title: "How to choose perfect smartwatch",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?"
    },
    {
      id: 2,
      image: twentyeight,
      date: "Jan 20, 2024",
      author: "Safya",
      title: "How to choose perfect gadget",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?"
    },
    {
      id: 3,
      image: twentynine,
      date: "Jan 20, 2024",
      author: "Sabif",
      title: "How to choose perfect VR headset",
      description: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Recent News</h1>
        <p className="text-gray-500 text-lg">Explore Our Blogs</p>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Image Container with hover scale effect */}
            <div className="overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Date and Author */}
              <div className="text-sm text-gray-500 mb-3">
                <span>{item.date}</span>
                <span className="mx-1">by</span>
                <span className="font-medium">{item.author}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;