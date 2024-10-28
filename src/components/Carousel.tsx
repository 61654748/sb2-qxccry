import React from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    title: '春季减脂计划',
    subtitle: '专业教练指导，科学饮食搭配',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
    title: '新会员特惠',
    subtitle: '立即加入享受50%优惠',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=1200&q=80',
    title: '团课挑战',
    subtitle: '30天改变计划现正进行',
  },
];

export default function Carousel() {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="flex transition-transform duration-500 h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
              <p className="text-white/90 mt-2">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}