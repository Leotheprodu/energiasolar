import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Energia Solar DC SAS',
    description: 'Empresa de Servicios y productos de energia Solar',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
