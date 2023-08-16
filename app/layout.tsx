import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Providers } from './providers';
import Link from 'next/link';
import Image from 'next/image';
import { IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DC Energía Solar',
    description: 'Empresa de Suministros y proyectos solares en Colombia',
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
                    <div className="bg-blanco">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between mx-[10rem] my-3">
                                <Link href={'/'} className="">
                                    <Image
                                        src={
                                            'https://storage.googleapis.com/bucket-energiasolar/solar_1_7714a67ab6/solar_1_7714a67ab6.png'
                                        }
                                        width={150}
                                        height={150}
                                        alt="Logo DC Enegia Solar"
                                        className=""
                                    ></Image>
                                </Link>
                                <div>
                                    <div className="flex gap-2">
                                        <IconPhoneFilled className="text-primario" />{' '}
                                        <p className="">3194 948 565</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <IconMailFilled className="text-primario" />{' '}
                                        <p className="">
                                            info@somosmasqueenergiadcsas.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Navbar />
                        </div>
                    </div>

                    {children}
                </Providers>
            </body>
        </html>
    );
}
