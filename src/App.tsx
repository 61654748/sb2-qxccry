import React, { useState } from 'react';
import { Search, Bell, Home, Calendar, Users, MessageSquare, User, Dumbbell } from 'lucide-react';
import Carousel from './components/Carousel';
import FeaturedClasses from './components/FeaturedClasses';
import TopTrainers from './components/TopTrainers';
import QuickAccess from './components/QuickAccess';
import Community from './components/Community';
import FitnessGoals from './components/FitnessGoals';
import Membership from './components/Membership';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-emerald-500" />
            <span className="text-xl font-bold text-gray-800">FitLife</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索课程、教练..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        <Carousel />
        <div className="max-w-7xl mx-auto px-4 space-y-8 mt-8">
          <FeaturedClasses />
          <TopTrainers />
          <QuickAccess />
          <Community />
          <FitnessGoals />
          <Membership />
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {[
            { icon: Home, label: '首页', id: 'home' },
            { icon: Calendar, label: '课程', id: 'classes' },
            { icon: Users, label: '教练', id: 'trainers' },
            { icon: MessageSquare, label: '社区', id: 'community' },
            { icon: User, label: '我的', id: 'profile' },
          ].map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center space-y-1 ${
                activeTab === id ? 'text-emerald-500' : 'text-gray-500'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;