import type {ReactNode} from 'react';
import '@/app/ui/global.css';
import { inter, geist } from '@/app/ui/fonts';


export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} ${inter.variable} ${geist.variable} antialiased`}>{children}</body>
        </html>
        );
}
