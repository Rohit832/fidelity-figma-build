import React from 'react';
import { BackgroundEffects } from './BackgroundEffects';
import { FounderContent } from './FounderContent';

export const FounderSection: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&family=Manrope:wght@400;700&family=Inter:wght@600;700&display=swap"
      />
      <section className="flex w-full min-h-[904px] flex-col justify-end items-center gap-2.5 relative overflow-hidden px-[207px] py-0 max-md:px-[50px] max-md:py-0 max-sm:min-h-[auto] max-sm:px-5 max-sm:py-0">
        <BackgroundEffects />
        
        <div className="flex items-center gap-[104px] relative z-[1] w-full max-w-[1027px] max-md:flex-col max-md:gap-[50px] max-md:items-center max-sm:gap-[30px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/437f7bddce08f7d67a5a685804720413dd638f35?width=675"
            alt="CA Rishita - Founder of Finsage"
            className="w-[337px] h-[851px] aspect-[44/111] relative shrink-0 max-md:w-[250px] max-md:h-[632px] max-sm:w-[200px] max-sm:h-[505px]"
          />
          
          <FounderContent />
        </div>
      </section>
    </>
  );
};
