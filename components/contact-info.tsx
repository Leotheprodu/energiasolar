'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    icon: ReactNode;
    titulo: string;
    parrafo: string;
    link: string;
}
export function ContactInfo({ icon, titulo, parrafo, link }: Props) {
    return (
        <>
            <Link
                target="_blank"
                href={link}
                className="hover:cursor-pointer hover:scale-105 transition-transform ease-in duration-100	"
            >
                <div className="flex flex-col items-center bg-secundario rounded-lg gap-2 p-4">
                    <div className="">{icon}</div>
                    <div className="text-center">
                        <h3 className="contact-info__titulo">{titulo}</h3>
                        {/* <p className="contact-info__parrafo">{parrafo}</p> */}
                    </div>
                </div>
            </Link>
        </>
    );
}
