import { Inter, Geist, Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // choisissez seulement ce que vous utilisez
    display: 'swap', // display: 'swap' améliore la LCP (le texte s’affiche avec la fallback puis switch vers la bonne police).
    variable: '--font-inter', // variable génère une classe qui expose --font-xxx.
    // fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Arial'], // optionnel
});

export const geist = Geist({
    subsets: ['latin'],
    weight: ['400', '500'], // limitez les graisses
    display: 'swap',
    variable: '--font-geist',
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});