import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    title: '月卡',
    price: '299',
    features: ['无限次健身房使用', '基础团课课程', '营养建议'],
  },
  {
    title: '季卡',
    price: '799',
    features: ['无限次健身房使用', '所有团课课程', '专属教练指导', '营养规划'],
    popular: true,
  },
];

export default function Membership() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">会员套餐</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`bg-white rounded-lg shadow-sm p-6 ${
              plan.popular ? 'ring-2 ring-emerald-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="inline-block bg-emerald-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                最受欢迎
              </span>
            )}
            <h3 className="text-xl font-bold">{plan.title}</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold">¥{plan.price}</span>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 rounded-md ${
                plan.popular
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              立即开通
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}