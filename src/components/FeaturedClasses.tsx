import React from 'react';
import { Clock, Users as UsersIcon } from 'lucide-react';

const classes = [
  {
    id: 1,
    title: '高强度间歇训练',
    time: '09:00 - 10:00',
    trainer: '王教练',
    spots: 5,
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: '瑜伽冥想',
    time: '10:30 - 11:30',
    trainer: '李教练',
    spots: 8,
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=600&q=80',
  },
];

export default function FeaturedClasses() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">今日推荐课程</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={cls.image} alt={cls.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{cls.title}</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{cls.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{cls.trainer}</span>
                  <div className="flex items-center text-emerald-600">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    <span>剩余{cls.spots}个名额</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition-colors">
                立即预约
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}