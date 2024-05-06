'use client'
import Image from 'next/image';
import { createContext } from 'react';

interface MainContextType {
  // Define your context properties here
}

export const MainContext = createContext<MainContextType>({
  // Provide initial values for your context properties here
});

export default function Home() {
  return (
    <main>
      </main>

  );
}
