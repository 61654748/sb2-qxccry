import React from 'react';
import { Calendar, Map, Apple, Book } from 'lucide-react';

const quickLinks = [
  { icon: Calendar, label: '我的课程', color: 'bg-blue-500' },
  { icon: Map, label: '场地导航', color: 'bg-purple-500' },
  { icon: Apple, label: '饮食建议', color: 'bg-green-500' },
  { icon: Book, label: '健身知识', color: 'bg-orange-500' },
];

export default function QuickAccess() {
  return (
    <section className="grid grid-cols-4 gap-4">
      {quickLinks.map(({ icon: Icon, label, color }) => (
        <button
          key={label}
          className="flex flex-col items-center space-y-2"
        >
          <div className={`${color} p-4 rounded-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span className="text-sm text-gray-600">{label}</span>
        </button>
      ))}
    </section>
  );
}