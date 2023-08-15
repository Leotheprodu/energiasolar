import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center">
            <ul className="flex gap-10 right-20">
                <li>
                    <Link className="" href="/">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/servicios">Servicios</Link>
                </li>
            </ul>
        </nav>
    );
}
