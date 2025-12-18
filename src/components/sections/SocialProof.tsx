import React from 'react';
import Image from 'next/image';
import { SOCIAL_PROOF_LOGOS } from '@/lib/constants';

const SocialProof = () => {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-base font-semibold text-gray-500 tracking-wider uppercase mb-8">
          Được tin tưởng và nhắc đến bởi
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {SOCIAL_PROOF_LOGOS.map((logo, index) => (
            <div key={index} className="relative w-28 h-16">
              <Image 
                src={logo.url} 
                alt={logo.name} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;