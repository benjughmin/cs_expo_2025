import React from 'react';

type InfoPillProps = {
  text: string;
  size?: 'sm' | 'md' | 'lg';
};

const InfoPill: React.FC<InfoPillProps> = ({ text, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-4 py-2',
    md: 'text-base px-5 py-1',
    lg: 'text-lg px-5 py-3'
  };

  return (
    <span className={`flex items-center bg-transparent text-white ${sizeClasses[size]} rounded-full border border-white`}>
      <img
        src="/projects/star.svg"
        alt="star icon"
        className="w-3 h-3 mr-2"
      />
      {text}
    </span>
  );
};
export default InfoPill;