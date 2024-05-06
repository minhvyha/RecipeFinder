'use client'
import Image from 'next/image';
import { createContext } from 'react';

interface MainContextType {
  account: boolean
}

export const MainContext = createContext<MainContextType>({
account: true});

export default function Home() {
  return (
    <main>
      </main>

  );
}
