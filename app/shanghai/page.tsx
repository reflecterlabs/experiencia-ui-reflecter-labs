import React from 'react';
import ShanghaiContent from './shanghai-content';

export const metadata = {
  title: 'Grinta Protocol en Shanghai | Reflecter Labs',
  description: 'Conoce cómo nuestro protocolo ganó en el Loop House de Shanghai con un modelo RL autónomo y una stablecoin innovadora.',
}

export default function ShanghaiPage() {
  return (
    <main className="min-h-screen relative z-10 bg-transparent pt-32 pb-16">
      <ShanghaiContent />
    </main>
  );
}
