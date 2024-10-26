import React from 'react';
import SocialIcon from '../components/SocialIcon';
import { SocialLinks } from '../types/types';

interface HomeProps {
  name: string;
  title: string;
  location: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLinks;
}

const Home: React.FC<HomeProps> = ({
  name,
  title,
  location,
  bio,
  imageUrl,
  socialLinks
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white">{name}</h1>
              <p className="text-xl text-blue-400">{title}</p>
              <p className="text-gray-400">{location}</p>
            </div>
            <p className="text-gray-300 leading-relaxed">{bio}</p>
            <div className="flex flex-wrap gap-4">
              {Object.entries(socialLinks).map(([platform, link]) => (
                <SocialIcon key={platform} platform={platform} link={link} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
