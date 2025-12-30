import { Inter, Geist, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  // Limitez aux graisses utilisées pour optimiser le poids
  // weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const geist = Geist({
  subsets: ['latin'],
  // weight: ['400', '500'],
  display: 'swap',
  variable: '--font-geist',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lusitana',
});
