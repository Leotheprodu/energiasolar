import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Providers } from './providers';
import Link from 'next/link';
import Image from 'next/image';

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
            <body className={`${inter.className}`}>
                <Providers>
                    <div className="flex justify-between mx-20">
                        <Link href={'/'} className="m-0">
                            <Image
                                src={
                                    'https://storage.googleapis.com/bucket-energiasolar/solar_1_7714a67ab6/solar_1_7714a67ab6.png'
                                }
                                width={100}
                                height={100}
                                alt="Logo Enegia Solar"
                                className=""
                            ></Image>
                        </Link>

                        <Navbar />
                    </div>

                    {children}
                </Providers>
            </body>
        </html>
    );
}
