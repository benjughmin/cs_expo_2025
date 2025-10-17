import React from 'react';

type InfoPillProps = {
  text: string;
};

const InfoPill: React.FC<InfoPillProps> = ({ text }) => {
  return (
    <span className="flex items-center bg-transparent text-white text-base px-4 py-2 rounded-full border border-white">
      <img 
        src="/projects/star.svg" 
        alt="star icon" 
        className="w-5 h-5 mr-2"
      />
      {text}
    </span>
  );
};

export default InfoPill;