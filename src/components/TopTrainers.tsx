import React from 'react';
import { Star } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: '王教练',
    specialty: '力量训练专家',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: '李教练',
    specialty: '瑜伽导师',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function TopTrainers() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">明星教练</h2>
      <div className="grid grid-cols-2 gap-4">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-4">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{trainer.name}</h3>
                <p className="text-sm text-gray-600">{trainer.specialty}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm ml-1">{trainer.rating}</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition-colors">
              预约私教
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}