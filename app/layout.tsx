import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './navbar';
import { Providers } from './providers';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import Image from 'next/image';
import {
    IconBrandWhatsapp,
    IconMailFilled,
    IconPhoneFilled,
} from '@tabler/icons-react';
import {
    EMP_DIR,
    EMP_EMAIL_1,
    EMP_NAME,
    EMP_TEL_1,
    EMP_YEAR,
} from '@/constants';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: EMP_NAME,
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
                                        alt={`Logo ${EMP_NAME}`}
                                        className=""
                                    ></Image>
                                </Link>
                                <div className="hidden md:flex md:flex-col">
                                    <div className="flex gap-2">
                                        <IconPhoneFilled className="text-primario" />{' '}
                                        <p className="">{`+(57)${EMP_TEL_1}`}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <IconMailFilled className="text-primario" />{' '}
                                        <p className="">{EMP_EMAIL_1}</p>
                                    </div>
                                </div>
                            </div>

                            <Navbar />
                        </div>
                    </header>
                    <Link
                        target="_blank"
                        className="flex flex-col fixed right-8 bottom-10 z-10"
                        href="https://wa.me/573157033937?text=Me%20gustaría%20saber%20más%20de%20ustedes,%20"
                    >
                        <div>
                            <IconBrandWhatsapp size={40} />
                        </div>
                        <p>Chat</p>
                    </Link>
                    <main>{children}</main>
                    <footer className="w-full bg-gris relative bottom-0 p-10 ">
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <h3 className=" uppercase text-terciario mb-2">
                                    {EMP_NAME}
                                </h3>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    {EMP_EMAIL_1}
                                </Link>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    {`Llamanos: +(57)${EMP_TEL_1}`}
                                </Link>
                                <Link
                                    href={'/contacto'}
                                    underline="hover"
                                    as={NextLink}
                                    className="text-red-400"
                                >
                                    {EMP_DIR}
                                </Link>
                            </div>
                            <div className="flex items-end">
                                {`© ${EMP_YEAR} ${EMP_NAME}. Todos los derechos
                                reservados.`}
                            </div>
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
