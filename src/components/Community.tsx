import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const posts = [
  {
    id: 1,
    user: {
      name: '小王',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
    },
    content: '完成30天健身挑战！感觉整个人都不一样了 💪',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    likes: 128,
    comments: 32,
  },
];

export default function Community() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">社区动态</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{post.user.name}</span>
              </div>
              <p className="mt-3">{post.content}</p>
            </div>
            <img src={post.image} alt="" className="w-full h-64 object-cover" />
            <div className="p-4 flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600">
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}