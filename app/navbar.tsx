import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center h-16 p-5 bg-blanco backdrop-blur fixed w-screen">
            <ul className="flex gap-10 absolute right-20">
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
