import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-white font-bold text-xl hover:text-blue-400 transition">
              Portfolio
            </Link>
            <div className="flex space-x-8">
              {[
                { path: '/', label: 'Home' },
                // { path: '/about', label: 'About Me'},
                { path: '/publications', label: 'Publications' },
                { path: '/projects', label: 'Projects' },
                { path: '/resume', label: 'Resume' },
                { path: '/connect', label: 'Let\'s Connect' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  } transition`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
