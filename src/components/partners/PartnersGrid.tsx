"use client";

import PartnerCard from './PartnerCard';

interface Partner {
  name: string;
  logo: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  tier: string;
  twitter?: string;
}

interface PartnersGridProps {
  partners: Partner[];
  selectedTier: string | null;
}

export default function PartnersGrid({ partners, selectedTier }: PartnersGridProps) {
  const filteredPartners = selectedTier
    ? partners.filter(partner => partner.tier === selectedTier)
    : partners;

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {filteredPartners.map((partner, index) => (
          <PartnerCard
            key={index}
            name={partner.name}
            logo={partner.logo}
            facebook={partner.facebook}
            instagram={partner.instagram}
            twitter={partner.twitter}
            website={partner.website}
          />
        ))}
      </div>
    </section>
  );
}
