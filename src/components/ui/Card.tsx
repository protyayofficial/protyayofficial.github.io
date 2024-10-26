import React from 'react';

// Define the CardProps interface
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// Card component definition
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Define the CardContentProps interface
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// CardContent component definition
const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

// Export both components
export { Card, CardContent };
