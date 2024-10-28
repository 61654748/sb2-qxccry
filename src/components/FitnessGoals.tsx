import React from 'react';

export default function FitnessGoals() {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg p-6 text-white">
      <h2 className="text-xl font-bold mb-4">设定你的健身目标</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">你的主要目标是什么？</label>
          <select className="w-full p-2 rounded bg-white/10 border border-white/20">
            <option>增肌</option>
            <option>减脂</option>
            <option>提高体能</option>
            <option>保持健康</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">每周计划训练几天？</label>
          <div className="grid grid-cols-4 gap-2">
            {[2, 3, 4, 5].map((days) => (
              <button
                key={days}
                className="p-2 rounded border border-white/20 hover:bg-white/10"
              >
                {days}天
              </button>
            ))}
          </div>
        </div>
        <button className="w-full bg-white text-emerald-600 py-2 rounded-md font-medium">
          生成计划
        </button>
      </div>
    </section>
  );
}