import React from 'react';
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';
import {
  SiGooglescholar,
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
} from 'react-icons/si';
import { Database } from 'lucide-react';

// Importing custom SVGs
import { ReactComponent as OrcidIcon } from '../assets/orcid.svg';
import { ReactComponent as KaggleIcon } from '../assets/kaggle.svg';
import { ReactComponent as ResearchGateIcon } from '../assets/researchgate.svg';

interface SocialIconProps {
  platform: string;
  link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform, link }) => {
  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case 'email':
        return <AiOutlineMail className="w-6 h-6 text-blue-500" />;
      case 'linkedin':
        return <AiFillLinkedin className="w-6 h-6 text-blue-700" />;
      case 'github':
        return <AiFillGithub className="w-6 h-6 text-black" />;
      case 'instagram':
        return <AiFillInstagram className="w-6 h-6 text-pink-600" />;
      case 'googlescholar':
        return <SiGooglescholar className="w-6 h-6 text-blue-600" />;
      case 'leetcode':
        return <SiLeetcode className="w-6 h-6 text-orange-500" />;
      case 'codeforces':
        return <SiCodeforces className="w-6 h-6 text-blue-500" />;
      case 'codechef':
        return <SiCodechef className="w-6 h-6" style={{ color: '#5B4638' }} />; // Custom color for CodeChef
      case 'orcid':
        return <OrcidIcon className="w-6 h-6" style={{ fill: 'green' }} />; // Apply green color
      case 'kaggle':
        return <KaggleIcon className="w-6 h-6" style={{ fill: '#0071C0' }} />; // Apply blue color
      case 'researchgate':
        return <ResearchGateIcon className="w-6 h-6" style={{ fill: '#00CCBB' }} />; // Apply teal color
      default:
        return <Database className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full hover:bg-gray-200 transition-colors"
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
