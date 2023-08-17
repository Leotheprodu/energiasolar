import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Providers } from './providers';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
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
                    <header className="bg-blanco">
                        <div className="flex flex-col">
                            <div className="md:flex items-center md:justify-between mx-auto md:mx-[10rem] my-3">
                                <Link href={'/'} className="" as={NextLink}>
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
                                <div className="hidden md:flex md:flex-col">
                                    <div className="flex gap-2">
                                        <IconPhoneFilled className="text-primario" />{' '}
                                        <p className="">+(57)3194 948 565</p>
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
                    </header>
                    <main>{children}</main>
                    <footer className="w-full bg-gris relative bottom-0 p-10 ">
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <h3 className=" uppercase text-terciario mb-2">
                                    DC ENERGIA SOLAR SAS
                                </h3>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    info@somosmasqueenergiadcsas.com
                                </Link>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    Llamanos: +(57)3194 948 565
                                </Link>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    Carrera 43 A – 15sur- 15 Edificio Xerox piso
                                    8 Medellín- Antioquia
                                </Link>
                            </div>
                            <div className="flex items-end">
                                © 2023 DC ENERGIA SOLAR SAS. Todos los derechos
                                reservados.
                            </div>
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
