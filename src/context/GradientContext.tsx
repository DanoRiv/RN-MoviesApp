//Estado inicial
// Provider
// Context

import React, { createContext, useState } from 'react';

interface GradientColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: GradientColors;
  prevColors: GradientColors;
  setGradientColors: (items: GradientColors) => void; setPrevGradientColors: (items: GradientColors) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

  const [colors, setColors] = useState<GradientColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<GradientColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setGradientColors = (items: GradientColors) => {
    setColors(items);
  };
  const setPrevGradientColors = (items: GradientColors) => {
    setPrevColors(items);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setGradientColors,
        setPrevGradientColors,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
