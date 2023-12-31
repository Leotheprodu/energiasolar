import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
export default function Navbar() {
    return (
        <nav className="flex items-center justify-center bg-terciario h-12">
            <ul className="flex gap-10 right-20">
                <li>
                    <Link
                        className="text-blanco uppercase "
                        as={NextLink}
                        underline="hover"
                        href="/"
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-blanco uppercase"
                        as={NextLink}
                        underline="hover"
                        href="/servicios"
                    >
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-blanco uppercase"
                        as={NextLink}
                        underline="hover"
                        href="/empresa"
                    >
                        Nuestra Empresa
                    </Link>
                </li>
                <li>
                    <Link
                        className="text-blanco uppercase"
                        as={NextLink}
                        underline="hover"
                        href="/contacto"
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
