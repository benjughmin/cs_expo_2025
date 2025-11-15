"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

interface PartnerCardProps {
  name: string;
  logo: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  accentColor: string;
}

export default function PartnerCard({ 
  name, 
  logo, 
  facebook, 
  instagram, 
  website,
  accentColor 
}: PartnerCardProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center p-6 md:p-8 rounded-[20px] border-2 h-[280px] md:h-[320px] w-full"
      style={{ 
        borderColor: accentColor,
        background: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)`
      }}
    >
      {/* Logo */}
      <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-gray-300 rounded-[12px] mb-6 flex items-center justify-center overflow-hidden">
        <img 
          src={logo} 
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name */}
      <p className="font-avolta text-white text-[18px] md:text-[20px] mb-4 text-center tracking-[0.05em]">
        {name}
      </p>

      {/* Social Links */}
      <div className="flex gap-4 items-center justify-center">
        {facebook && (
          <Link 
            href={facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}
          >
            <FaFacebook size={24} />
          </Link>
        )}
        {instagram && (
          <Link 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}
          >
            <FaInstagram size={24} />
          </Link>
        )}
        {website && (
          <Link 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            style={{ color: accentColor }}
          >
            <FaGlobe size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}
