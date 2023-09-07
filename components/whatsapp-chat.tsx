'use client';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const whatsappChat = () => {
    return (
        <Link
            className="flex flex-col fixed"
            href="https://wa.me/573157033937?text=Me%20gustaría%20saber%20más%20de%20ustedes,%20"
        >
            <div>
                <IconBrandWhatsapp size={40} />
            </div>
            <p>Chat</p>
        </Link>
    );
};
