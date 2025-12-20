'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UpsellContextType {
  isUpsellOpen: boolean;
  openUpsell: () => void;
  closeUpsell: () => void;
}

const UpsellContext = createContext<UpsellContextType | undefined>(undefined);

export const UpsellProvider = ({ children }: { children: ReactNode }) => {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const openUpsell = () => setIsUpsellOpen(true);
  const closeUpsell = () => setIsUpsellOpen(false);

  return (
    <UpsellContext.Provider value={{ isUpsellOpen, openUpsell, closeUpsell }}>
      {children}
    </UpsellContext.Provider>
  );
};

export const useUpsell = () => {
  const context = useContext(UpsellContext);
  if (!context) {
    throw new Error('useUpsell must be used within a UpsellProvider');
  }
  return context;
};